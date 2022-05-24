import {SelfSignedCertificatePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfSignedCertificatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SelfSignedCertificatePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SelfSignedCertificatePostRequestBodyImpl();
}
