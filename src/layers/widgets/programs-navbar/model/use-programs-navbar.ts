"use client";

import { useCallback, useState } from "react";
import { useSectionScroll } from "@/layers/shared/lib/use-section-scroll";
import { programsNavbarItems } from "./programs-navbar-items";

export function useProgramsNavbar() {
    const [activeTabId, setActiveTabId] = useState<string>(programsNavbarItems[0].id);
    const activateSection = useCallback((sectionId: string) => {
        const item = programsNavbarItems.find(item => item.sectionId === sectionId);
        if (item) setActiveTabId(item.id);
    }, []);
    useSectionScroll(programsNavbarItems, activeTabId, activateSection);

    return { activeTabId, activateSection };
}
