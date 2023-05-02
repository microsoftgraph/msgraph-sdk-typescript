import {deserializeIntoPermutationaPostRequestBody} from './deserializeIntoPermutationaPostRequestBody';
import {PermutationaPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermutationaPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPermutationaPostRequestBody;
}
