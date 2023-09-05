import { type DownloadApplePushNotificationCertificateSigningRequestResponse } from './downloadApplePushNotificationCertificateSigningRequestResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDownloadApplePushNotificationCertificateSigningRequestResponse(downloadApplePushNotificationCertificateSigningRequestResponse: DownloadApplePushNotificationCertificateSigningRequestResponse | undefined = {} as DownloadApplePushNotificationCertificateSigningRequestResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { downloadApplePushNotificationCertificateSigningRequestResponse.value = n.getStringValue(); },
    }
}
