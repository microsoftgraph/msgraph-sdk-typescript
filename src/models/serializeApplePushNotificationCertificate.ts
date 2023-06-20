import {ApplePushNotificationCertificate} from './applePushNotificationCertificate';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplePushNotificationCertificate(applePushNotificationCertificate: ApplePushNotificationCertificate | undefined = {} as ApplePushNotificationCertificate, writer: SerializationWriter) : void {
        serializeEntity(writer, applePushNotificationCertificate)
        writer.writeStringValue("appleIdentifier", applePushNotificationCertificate.appleIdentifier);
        writer.writeStringValue("certificate", applePushNotificationCertificate.certificate);
        writer.writeStringValue("certificateUploadFailureReason", applePushNotificationCertificate.certificateUploadFailureReason);
        writer.writeStringValue("certificateUploadStatus", applePushNotificationCertificate.certificateUploadStatus);
        writer.writeDateValue("expirationDateTime", applePushNotificationCertificate.expirationDateTime);
        writer.writeDateValue("lastModifiedDateTime", applePushNotificationCertificate.lastModifiedDateTime);
        writer.writeStringValue("topicIdentifier", applePushNotificationCertificate.topicIdentifier);
}
