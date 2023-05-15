import {deserializeIntoClonePostRequestBody} from './deserializeIntoClonePostRequestBody';
import {ClonePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClonePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoClonePostRequestBody;
}
