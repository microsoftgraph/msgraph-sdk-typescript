import {ApplePushNotificationCertificateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplePushNotificationCertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplePushNotificationCertificateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplePushNotificationCertificateImpl();
}
