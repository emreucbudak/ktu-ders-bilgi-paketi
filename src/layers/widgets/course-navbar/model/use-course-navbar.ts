"use client";

import { useCallback, useState } from "react";
import { useSectionScroll } from "@/layers/shared/lib/use-section-scroll";
import { courseNavbarItems } from "./course-navbar-items";

export function useCourseNavbar() {
    const [activeTabId, setActiveTabId] = useState<string>(courseNavbarItems[0].id);
    const activateSection = useCallback((sectionId: string) => {
        const item = courseNavbarItems.find(item => item.sectionId === sectionId);
        if (item) setActiveTabId(item.id);
    }, []);
    useSectionScroll(courseNavbarItems, activeTabId, activateSection);

    return { activeTabId, activateSection };
}
