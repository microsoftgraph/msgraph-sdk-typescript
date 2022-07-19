/** Provides operations to manage the admin singleton. */
export enum PromptLoginBehavior {
    TranslateToFreshPasswordAuthentication = "translateToFreshPasswordAuthentication",
    NativeSupport = "nativeSupport",
    Disabled = "disabled",
    UnknownFutureValue = "unknownFutureValue",
}
