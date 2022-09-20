import {AddTokenSigningCertificatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddTokenSigningCertificatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddTokenSigningCertificatePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddTokenSigningCertificatePostRequestBody();
}
