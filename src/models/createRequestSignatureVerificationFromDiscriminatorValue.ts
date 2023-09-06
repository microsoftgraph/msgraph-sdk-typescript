import { deserializeIntoRequestSignatureVerification } from './deserializeIntoRequestSignatureVerification';
import { type RequestSignatureVerification } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRequestSignatureVerificationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRequestSignatureVerification;
}
