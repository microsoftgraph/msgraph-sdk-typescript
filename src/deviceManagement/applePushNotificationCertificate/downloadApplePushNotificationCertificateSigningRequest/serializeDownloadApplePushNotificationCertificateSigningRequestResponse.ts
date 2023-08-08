import type {DownloadApplePushNotificationCertificateSigningRequestResponse} from './downloadApplePushNotificationCertificateSigningRequestResponse';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDownloadApplePushNotificationCertificateSigningRequestResponse(writer: SerializationWriter, downloadApplePushNotificationCertificateSigningRequestResponse: DownloadApplePushNotificationCertificateSigningRequestResponse | undefined = {} as DownloadApplePushNotificationCertificateSigningRequestResponse) : void {
        writer.writeStringValue("value", downloadApplePushNotificationCertificateSigningRequestResponse.value);
        writer.writeAdditionalData(downloadApplePushNotificationCertificateSigningRequestResponse.additionalData);
}
