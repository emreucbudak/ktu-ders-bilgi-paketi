"use client";

import { useState } from "react";

export function useProgramsNavbar() {
    const [activeSection, setActiveSection] = useState("overview");

    return { activeSection, activateSection: setActiveSection };
}
