import { deserializeIntoOddPostRequestBody } from './deserializeIntoOddPostRequestBody';
import { type OddPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOddPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOddPostRequestBody;
}
