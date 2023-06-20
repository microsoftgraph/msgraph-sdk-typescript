import {DownloadApplePushNotificationCertificateSigningRequestResponse} from './downloadApplePushNotificationCertificateSigningRequestResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDownloadApplePushNotificationCertificateSigningRequestResponse(downloadApplePushNotificationCertificateSigningRequestResponse: DownloadApplePushNotificationCertificateSigningRequestResponse | undefined = {} as DownloadApplePushNotificationCertificateSigningRequestResponse, writer: SerializationWriter) : void {
        writer.writeStringValue("value", downloadApplePushNotificationCertificateSigningRequestResponse.value);
        writer.writeAdditionalData(downloadApplePushNotificationCertificateSigningRequestResponse.additionalData);
}
