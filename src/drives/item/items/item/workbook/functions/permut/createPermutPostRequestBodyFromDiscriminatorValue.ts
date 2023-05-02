import {deserializeIntoPermutPostRequestBody} from './deserializeIntoPermutPostRequestBody';
import {PermutPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermutPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPermutPostRequestBody;
}
