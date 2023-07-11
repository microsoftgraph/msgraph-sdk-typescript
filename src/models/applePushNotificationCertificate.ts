import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ApplePushNotificationCertificate extends Entity, Parsable {
    /**
     * Apple Id of the account used to create the MDM push certificate.
     */
    appleIdentifier?: string | undefined;
    /**
     * Not yet documented
     */
    certificate?: string | undefined;
    /**
     * Certificate serial number. This property is read-only.
     */
    certificateSerialNumber?: string | undefined;
    /**
     * The reason the certificate upload failed.
     */
    certificateUploadFailureReason?: string | undefined;
    /**
     * The certificate upload status.
     */
    certificateUploadStatus?: string | undefined;
    /**
     * The expiration date and time for Apple push notification certificate.
     */
    expirationDateTime?: Date | undefined;
    /**
     * Last modified date and time for Apple push notification certificate.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * Topic Id.
     */
    topicIdentifier?: string | undefined;
}
