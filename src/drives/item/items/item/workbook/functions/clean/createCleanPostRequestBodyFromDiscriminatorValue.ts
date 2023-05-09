import {deserializeIntoCleanPostRequestBody} from './deserializeIntoCleanPostRequestBody';
import {CleanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCleanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCleanPostRequestBody;
}
