import {RequestSignatureVerification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRequestSignatureVerificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : RequestSignatureVerification {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RequestSignatureVerification();
}
