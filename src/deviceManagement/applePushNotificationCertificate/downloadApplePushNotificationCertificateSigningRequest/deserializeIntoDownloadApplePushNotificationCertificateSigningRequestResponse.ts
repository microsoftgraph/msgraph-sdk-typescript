import type {DownloadApplePushNotificationCertificateSigningRequestResponse} from './downloadApplePushNotificationCertificateSigningRequestResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDownloadApplePushNotificationCertificateSigningRequestResponse(downloadApplePushNotificationCertificateSigningRequestResponse: DownloadApplePushNotificationCertificateSigningRequestResponse | undefined = {} as DownloadApplePushNotificationCertificateSigningRequestResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { downloadApplePushNotificationCertificateSigningRequestResponse.value = n.getStringValue(); },
    }
}
