import {deserializeIntoRequestSignatureVerification} from './deserializeIntoRequestSignatureVerification';
import {RequestSignatureVerification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRequestSignatureVerificationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRequestSignatureVerification;
}
