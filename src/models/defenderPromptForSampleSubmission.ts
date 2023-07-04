/**
 * Possible values for prompting user for samples submission.
 */
export enum DefenderPromptForSampleSubmission {
    /** User Defined, default value, no intent. */
    UserDefined = "userDefined",
    /** Always prompt. */
    AlwaysPrompt = "alwaysPrompt",
    /** Send safe samples automatically. */
    PromptBeforeSendingPersonalData = "promptBeforeSendingPersonalData",
    /** Never send data. */
    NeverSendData = "neverSendData",
    /** Send all data without prompting. */
    SendAllDataWithoutPrompting = "sendAllDataWithoutPrompting",
}
