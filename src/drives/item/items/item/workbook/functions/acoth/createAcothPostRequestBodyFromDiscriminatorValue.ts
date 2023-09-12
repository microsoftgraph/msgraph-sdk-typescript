import { deserializeIntoAcothPostRequestBody } from './deserializeIntoAcothPostRequestBody';
import { type AcothPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAcothPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAcothPostRequestBody;
}
