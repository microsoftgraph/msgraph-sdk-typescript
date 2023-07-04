/**
 * Indicates severity of insights. Possible values are: None, Informational, Warning, Error.
 */
export enum UserExperienceAnalyticsInsightSeverity {
    /** Indicates that the insight severity is none. */
    None = "none",
    /** Indicates that the insight severity is informational. */
    Informational = "informational",
    /** Indicates that the insight severity is warning. */
    Warning = "warning",
    /** Indicates that the insight severity is error. */
    ErrorEscaped = "error",
    /** Evolvable enumeration sentinel value. Do not use. */
    UnknownFutureValue = "unknownFutureValue",
}
