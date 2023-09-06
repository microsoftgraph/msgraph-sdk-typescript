import { deserializeIntoAddTokenSigningCertificatePostRequestBody } from './deserializeIntoAddTokenSigningCertificatePostRequestBody';
import { type AddTokenSigningCertificatePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAddTokenSigningCertificatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddTokenSigningCertificatePostRequestBody;
}
