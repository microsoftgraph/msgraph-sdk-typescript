import {PermutationaPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermutationaPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermutationaPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermutationaPostRequestBody();
}
