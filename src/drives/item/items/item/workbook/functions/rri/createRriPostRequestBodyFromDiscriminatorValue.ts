import { deserializeIntoRriPostRequestBody } from './deserializeIntoRriPostRequestBody';
import { type RriPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRriPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRriPostRequestBody;
}
