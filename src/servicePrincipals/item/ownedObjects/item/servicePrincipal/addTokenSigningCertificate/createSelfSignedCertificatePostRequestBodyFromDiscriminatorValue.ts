import {SelfSignedCertificatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfSignedCertificatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SelfSignedCertificatePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SelfSignedCertificatePostRequestBody();
}
