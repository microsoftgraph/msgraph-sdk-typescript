import {DownloadApplePushNotificationCertificateSigningRequestResponse} from './downloadApplePushNotificationCertificateSigningRequestResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDownloadApplePushNotificationCertificateSigningRequestResponse(writer: SerializationWriter, downloadApplePushNotificationCertificateSigningRequestResponse: DownloadApplePushNotificationCertificateSigningRequestResponse | undefined = {} as DownloadApplePushNotificationCertificateSigningRequestResponse) : void {
        writer.writeStringValue("value", downloadApplePushNotificationCertificateSigningRequestResponse.value);
        writer.writeAdditionalData(downloadApplePushNotificationCertificateSigningRequestResponse.additionalData);
}
