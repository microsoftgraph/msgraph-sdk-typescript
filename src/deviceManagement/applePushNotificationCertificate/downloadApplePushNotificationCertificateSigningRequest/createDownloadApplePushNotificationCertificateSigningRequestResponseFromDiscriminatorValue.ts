import { deserializeIntoDownloadApplePushNotificationCertificateSigningRequestResponse } from './deserializeIntoDownloadApplePushNotificationCertificateSigningRequestResponse';
import { type DownloadApplePushNotificationCertificateSigningRequestResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDownloadApplePushNotificationCertificateSigningRequestResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDownloadApplePushNotificationCertificateSigningRequestResponse;
}
