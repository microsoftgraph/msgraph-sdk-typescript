import { deserializeIntoUnmutePostRequestBody } from './deserializeIntoUnmutePostRequestBody';
import { type UnmutePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnmutePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnmutePostRequestBody;
}
