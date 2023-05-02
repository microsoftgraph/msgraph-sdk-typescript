import {deserializeIntoSmallPostRequestBody} from './deserializeIntoSmallPostRequestBody';
import {SmallPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSmallPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSmallPostRequestBody;
}
