"use client";

import { type ComponentPropsWithoutRef } from "react";
import { activateDetailSection } from "@/layers/shared/lib/use-active-section";

type DetailSectionProps = ComponentPropsWithoutRef<"section"> & { sectionId: string };

export default function DetailSection({ sectionId, children, ...props }: DetailSectionProps) {
    return <section {...props} id={`${sectionId}-section`}
        onMouseEnter={() => activateDetailSection(sectionId)}>
        {children}
    </section>;
}
