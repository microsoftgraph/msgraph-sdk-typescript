import {deserializeIntoSelfSignedCertificate} from './deserializeIntoSelfSignedCertificate';
import {SelfSignedCertificate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfSignedCertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSelfSignedCertificate;
}
