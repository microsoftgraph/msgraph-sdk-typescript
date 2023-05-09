import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Subscription} from './subscription';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscription(subscription: Subscription | undefined = {} as Subscription) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(subscription),
        "applicationId": n => { subscription.applicationId = n.getStringValue(); },
        "changeType": n => { subscription.changeType = n.getStringValue(); },
        "clientState": n => { subscription.clientState = n.getStringValue(); },
        "creatorId": n => { subscription.creatorId = n.getStringValue(); },
        "encryptionCertificate": n => { subscription.encryptionCertificate = n.getStringValue(); },
        "encryptionCertificateId": n => { subscription.encryptionCertificateId = n.getStringValue(); },
        "expirationDateTime": n => { subscription.expirationDateTime = n.getDateValue(); },
        "includeResourceData": n => { subscription.includeResourceData = n.getBooleanValue(); },
        "latestSupportedTlsVersion": n => { subscription.latestSupportedTlsVersion = n.getStringValue(); },
        "lifecycleNotificationUrl": n => { subscription.lifecycleNotificationUrl = n.getStringValue(); },
        "notificationQueryOptions": n => { subscription.notificationQueryOptions = n.getStringValue(); },
        "notificationUrl": n => { subscription.notificationUrl = n.getStringValue(); },
        "notificationUrlAppId": n => { subscription.notificationUrlAppId = n.getStringValue(); },
        "resource": n => { subscription.resource = n.getStringValue(); },
    }
}
