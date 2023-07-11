import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Subscription extends Entity, Parsable {
    /**
     * Optional. Identifier of the application used to create the subscription. Read-only.
     */
    applicationId?: string | undefined;
    /**
     * Required. Indicates the type of change in the subscribed resource that will raise a change notification. The supported values are: created, updated, deleted. Multiple values can be combined using a comma-separated list. Note:  Drive root item and list change notifications support only the updated changeType. User and group change notifications support updated and deleted changeType. Use updated to receive notifications when user or group is created, updated or soft deleted.  Use deleted to receive notifications when user or group is permanently deleted.
     */
    changeType?: string | undefined;
    /**
     * Required. Specifies the value of the clientState property sent by the service in each change notification. The maximum length is 128 characters. The client can check that the change notification came from the service by comparing the value of the clientState property sent with the subscription with the value of the clientState property received with each change notification.
     */
    clientState?: string | undefined;
    /**
     * Optional. Identifier of the user or service principal that created the subscription. If the app used delegated permissions to create the subscription, this field contains the id of the signed-in user the app called on behalf of. If the app used application permissions, this field contains the id of the service principal corresponding to the app. Read-only.
     */
    creatorId?: string | undefined;
    /**
     * Optional. A base64-encoded representation of a certificate with a public key used to encrypt resource data in change notifications. Optional but required when includeResourceData is true.
     */
    encryptionCertificate?: string | undefined;
    /**
     * Optional. A custom app-provided identifier to help identify the certificate needed to decrypt resource data.
     */
    encryptionCertificateId?: string | undefined;
    /**
     * Required. Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to. For the maximum supported subscription length of time, see the table below.
     */
    expirationDateTime?: Date | undefined;
    /**
     * Optional. When set to true, change notifications include resource data (such as content of a chat message).
     */
    includeResourceData?: boolean | undefined;
    /**
     * Optional. Specifies the latest version of Transport Layer Security (TLS) that the notification endpoint, specified by notificationUrl, supports. The possible values are: v1_0, v1_1, v1_2, v1_3. For subscribers whose notification endpoint supports a version lower than the currently recommended version (TLS 1.2), specifying this property by a set timeline allows them to temporarily use their deprecated version of TLS before completing their upgrade to TLS 1.2. For these subscribers, not setting this property per the timeline would result in subscription operations failing. For subscribers whose notification endpoint already supports TLS 1.2, setting this property is optional. In such cases, Microsoft Graph defaults the property to v1_2.
     */
    latestSupportedTlsVersion?: string | undefined;
    /**
     * Optional. The URL of the endpoint that receives lifecycle notifications, including subscriptionRemoved, reauthorizationRequired, and missed notifications. This URL must make use of the HTTPS protocol.
     */
    lifecycleNotificationUrl?: string | undefined;
    /**
     * Optional. OData query options for specifying value for the targeting resource. Clients receive notifications when resource reaches the state matching the query options provided here. With this new property in the subscription creation payload along with all existing properties, Webhooks will deliver notifications whenever a resource reaches the desired state mentioned in the notificationQueryOptions property. For example, when the print job is completed or when a print job resource isFetchable property value becomes true etc.  Supported only for Universal Print Service. For more information, see Subscribe to change notifications from cloud printing APIs using Microsoft Graph.
     */
    notificationQueryOptions?: string | undefined;
    /**
     * Required. The URL of the endpoint that will receive the change notifications. This URL must make use of the HTTPS protocol. Any query string parameter included in the notificationUrl property will be included in the HTTP POST request when Microsoft Graph sends the change notifications.
     */
    notificationUrl?: string | undefined;
    /**
     * Optional. The app ID that the subscription service can use to generate the validation token. This allows the client to validate the authenticity of the notification received.
     */
    notificationUrlAppId?: string | undefined;
    /**
     * Required. Specifies the resource that will be monitored for changes. Do not include the base URL (https://graph.microsoft.com/v1.0/). See the possible resource path values for each supported resource.
     */
    resource?: string | undefined;
}
