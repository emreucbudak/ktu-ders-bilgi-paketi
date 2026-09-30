"use client";

import { type ComponentPropsWithoutRef } from "react";

type DetailSectionProps = ComponentPropsWithoutRef<"section"> & {
    sectionId: string;
    onSectionEnter: (id: string) => void;
};

export default function DetailSection({ sectionId, onSectionEnter, children, ...props }: DetailSectionProps) {
    return <section {...props} id={`${sectionId}-section`}
        onMouseEnter={() => onSectionEnter(sectionId)}>
        {children}
    </section>;
}
