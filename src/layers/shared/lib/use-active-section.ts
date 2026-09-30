"use client";

import { useEffect, useState } from "react";

export const DETAIL_SECTION_EVENT = "detail-section-active";
export type DetailSectionEvent = CustomEvent<{ id: string }>;

export function activateDetailSection(id: string) {
    window.dispatchEvent(new CustomEvent(DETAIL_SECTION_EVENT, {
        detail: { id },
    }));
}

export function useActiveSection(sectionIds: readonly string[]) {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);

    useEffect(() => {
        const handleSectionEvent = (event: Event) => {
            const { id } = (event as DetailSectionEvent).detail;
            if (sectionIds.includes(id)) setActiveSection(id);
        };
        window.addEventListener(DETAIL_SECTION_EVENT, handleSectionEvent);
        return () => {
            window.removeEventListener(DETAIL_SECTION_EVENT, handleSectionEvent);
        };
    }, [sectionIds]);

    return activeSection;
}
