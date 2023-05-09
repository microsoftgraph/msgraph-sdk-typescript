import {ApplePushNotificationCertificate} from './applePushNotificationCertificate';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplePushNotificationCertificate(applePushNotificationCertificate: ApplePushNotificationCertificate | undefined = {} as ApplePushNotificationCertificate) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(applePushNotificationCertificate),
        "appleIdentifier": n => { applePushNotificationCertificate.appleIdentifier = n.getStringValue(); },
        "certificate": n => { applePushNotificationCertificate.certificate = n.getStringValue(); },
        "certificateSerialNumber": n => { applePushNotificationCertificate.certificateSerialNumber = n.getStringValue(); },
        "certificateUploadFailureReason": n => { applePushNotificationCertificate.certificateUploadFailureReason = n.getStringValue(); },
        "certificateUploadStatus": n => { applePushNotificationCertificate.certificateUploadStatus = n.getStringValue(); },
        "expirationDateTime": n => { applePushNotificationCertificate.expirationDateTime = n.getDateValue(); },
        "lastModifiedDateTime": n => { applePushNotificationCertificate.lastModifiedDateTime = n.getDateValue(); },
        "topicIdentifier": n => { applePushNotificationCertificate.topicIdentifier = n.getStringValue(); },
    }
}
