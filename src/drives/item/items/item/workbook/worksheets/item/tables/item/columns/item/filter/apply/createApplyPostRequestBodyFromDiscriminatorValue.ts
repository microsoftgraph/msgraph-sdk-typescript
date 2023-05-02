import {deserializeIntoApplyPostRequestBody} from './deserializeIntoApplyPostRequestBody';
import {ApplyPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyPostRequestBody;
}
