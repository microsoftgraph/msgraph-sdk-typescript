import {deserializeIntoReplacePostRequestBody} from './deserializeIntoReplacePostRequestBody';
import {ReplacePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReplacePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReplacePostRequestBody;
}
