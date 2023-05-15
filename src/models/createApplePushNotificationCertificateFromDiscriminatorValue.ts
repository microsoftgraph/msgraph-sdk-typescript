import {deserializeIntoApplePushNotificationCertificate} from './deserializeIntoApplePushNotificationCertificate';
import {ApplePushNotificationCertificate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplePushNotificationCertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplePushNotificationCertificate;
}
