"use client";

import { useState } from "react";

export function useCourseNavbar() {
    const [activeSection, setActiveSection] = useState("course-information");

    return { activeSection, activateSection: setActiveSection };
}
