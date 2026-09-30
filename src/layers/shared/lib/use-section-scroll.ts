"use client";

import { useEffect, useRef } from "react";

type SectionItem = { id: string; sectionId: string };

export function useSectionScroll(
    items: readonly SectionItem[],
    activeTabId: string,
    onSectionEnter: (id: string) => void,
) {
    const activeTabRef = useRef(activeTabId);
    useEffect(() => { activeTabRef.current = activeTabId; }, [activeTabId]);

    useEffect(() => {
        const sections = items.map(item => ({ item, element: document.getElementById(`${item.sectionId}-section`) }))
            .filter(section => section.element !== null);
        const visibleIds = new Set<string>();
        let observer: IntersectionObserver;

        const activate = (item: SectionItem) => {
            activeTabRef.current = item.id;
            onSectionEnter(item.sectionId);
        };
        const observe = () => {
            observer?.disconnect();
            visibleIds.clear();
            const readingLine = Math.round(window.innerHeight * 0.25);
            observer = new IntersectionObserver(entries => {
                for (const entry of entries) {
                    if (entry.isIntersecting) visibleIds.add(entry.target.id);
                    else visibleIds.delete(entry.target.id);
                }
                const current = sections.find(({ item }) => item.id === activeTabRef.current);
                // Keep the selected column when two sections share the same row.
                if (current && visibleIds.has(current.element!.id)) return;
                const next = sections.find(({ element }) => visibleIds.has(element!.id));
                if (next) activate(next.item);
            }, {
                rootMargin: `-${readingLine}px 0px -${window.innerHeight - readingLine - 1}px 0px`,
                threshold: 0,
            });
            for (const { element } of sections) observer.observe(element!);
        };
        // A short final section may not reach the reading line before the page ends.
        const handlePageEnd = () => {
            const last = sections[sections.length - 1];
            if (last && window.scrollY > 0 &&
                window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2 &&
                activeTabRef.current !== last.item.id) activate(last.item);
        };
        observe();
        window.addEventListener("resize", observe);
        window.addEventListener("scroll", handlePageEnd, { passive: true });
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", observe);
            window.removeEventListener("scroll", handlePageEnd);
        };
    }, [items, onSectionEnter]);
}
