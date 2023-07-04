/**
 * Movies rating labels in Germany
 */
export enum RatingGermanyMoviesType {
    /** Default value, allow all movies content */
    AllAllowed = "allAllowed",
    /** Do not allow any movies content */
    AllBlocked = "allBlocked",
    /** Ab 0 Jahren, no age restrictions */
    General = "general",
    /** Ab 6 Jahren, ages 6 and older */
    AgesAbove6 = "agesAbove6",
    /** Ab 12 Jahren, ages 12 and older */
    AgesAbove12 = "agesAbove12",
    /** Ab 16 Jahren, ages 16 and older */
    AgesAbove16 = "agesAbove16",
    /** Ab 18 Jahren, adults only */
    Adults = "adults",
}
