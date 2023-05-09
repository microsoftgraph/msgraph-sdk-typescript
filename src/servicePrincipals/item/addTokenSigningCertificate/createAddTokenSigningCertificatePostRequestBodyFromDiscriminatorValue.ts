import {deserializeIntoAddTokenSigningCertificatePostRequestBody} from './deserializeIntoAddTokenSigningCertificatePostRequestBody';
import {AddTokenSigningCertificatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddTokenSigningCertificatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddTokenSigningCertificatePostRequestBody;
}
