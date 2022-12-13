/** Provides operations to manage the collection of application entities. */
export enum TeamworkApplicationIdentityType {
    AadApplication = "aadApplication",
    Bot = "bot",
    TenantBot = "tenantBot",
    Office365Connector = "office365Connector",
    OutgoingWebhook = "outgoingWebhook",
    UnknownFutureValue = "unknownFutureValue",
}
