/**
 * Specifies what level of safe search (filtering adult content) is required
 */
export enum SafeSearchFilterType {
    /** User Defined, default value, no intent. */
    UserDefined = "userDefined",
    /** Strict, highest filtering against adult content. */
    Strict = "strict",
    /** Moderate filtering against adult content (valid search results will not be filtered). */
    Moderate = "moderate",
}
