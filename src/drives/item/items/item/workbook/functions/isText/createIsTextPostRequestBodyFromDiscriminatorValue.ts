import {deserializeIntoIsTextPostRequestBody} from './deserializeIntoIsTextPostRequestBody';
import {IsTextPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsTextPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsTextPostRequestBody;
}
