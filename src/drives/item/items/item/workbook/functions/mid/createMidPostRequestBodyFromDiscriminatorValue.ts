import { deserializeIntoMidPostRequestBody } from './deserializeIntoMidPostRequestBody';
import { type MidPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMidPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMidPostRequestBody;
}
