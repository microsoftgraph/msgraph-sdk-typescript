import { deserializeIntoPermutationaPostRequestBody } from './deserializeIntoPermutationaPostRequestBody';
import { type PermutationaPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPermutationaPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPermutationaPostRequestBody;
}
