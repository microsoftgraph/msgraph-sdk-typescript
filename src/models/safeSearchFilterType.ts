/** Provides operations to manage the deviceManagement singleton. */
export enum SafeSearchFilterType {
    /** User Defined, default value, no intent. */
    UserDefined = "userDefined",
    /** Strict, highest filtering against adult content. */
    Strict = "strict",
    /** Moderate filtering against adult content (valid search results will not be filtered). */
    Moderate = "moderate",
}
