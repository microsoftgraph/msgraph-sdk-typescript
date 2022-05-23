import {DownloadApplePushNotificationCertificateSigningRequestResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDownloadApplePushNotificationCertificateSigningRequestResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DownloadApplePushNotificationCertificateSigningRequestResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DownloadApplePushNotificationCertificateSigningRequestResponseImpl();
}
