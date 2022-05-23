import {SelfSignedCertificateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfSignedCertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) : SelfSignedCertificateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SelfSignedCertificateImpl();
}
