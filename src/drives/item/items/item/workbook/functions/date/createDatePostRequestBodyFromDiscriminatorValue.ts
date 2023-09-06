import { deserializeIntoDatePostRequestBody } from './deserializeIntoDatePostRequestBody';
import { type DatePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDatePostRequestBody;
}
