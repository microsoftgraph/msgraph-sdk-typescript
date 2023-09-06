import { deserializeIntoModPostRequestBody } from './deserializeIntoModPostRequestBody';
import { type ModPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createModPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoModPostRequestBody;
}
