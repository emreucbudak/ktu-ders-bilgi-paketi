import DetailSection from "@/layers/shared/ui/detail-section";
import { getWeeklyContent } from "@/layers/entities/course/model/course-weekly";

export default function WeeklyContent({ title, en }: { title: string; en: boolean }) {
    const weeks = getWeeklyContent(title, en);
    const t = (tr: string, english: string) => en ? english : tr;

    return (
        <DetailSection sectionId="weekly-topics-title" className="course-table-section weekly-content" aria-labelledby="weekly-topics-title">
            <h2 id="weekly-topics-title">{t("Haftalık konular", "Weekly topics")}</h2>
            <table className="weekly-table">
                <caption className="sr-only">{t("Haftalık ders içeriği", "Weekly course content")}</caption>
                <thead>
                    <tr>
                        <th scope="col" className="week-number-heading">{t("Hafta", "Week")}</th>
                        <th scope="col">{t("Haftalık konu", "Weekly topic")}</th>
                        <th scope="col">{t("Ders içeriği", "Course content")}</th>
                        <th scope="col">{t("Öğrenme etkinliği", "Learning activity")}</th>
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, weekIndex) => (
                        <tr key={weekIndex}>
                            <td className="week-number-cell" data-label={t("Hafta", "Week")}>{weekIndex + 1}</td>
                            <td data-label={t("Haftalık konu", "Weekly topic")}>{week.topic}</td>
                            <td data-label={t("Ders içeriği", "Course content")}>{week.content}</td>
                            <td data-label={t("Öğrenme etkinliği", "Learning activity")}>{week.activity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </DetailSection>
    );
}
