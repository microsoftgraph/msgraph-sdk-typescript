import { deserializeIntoAcotPostRequestBody } from './deserializeIntoAcotPostRequestBody';
import { type AcotPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAcotPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAcotPostRequestBody;
}
