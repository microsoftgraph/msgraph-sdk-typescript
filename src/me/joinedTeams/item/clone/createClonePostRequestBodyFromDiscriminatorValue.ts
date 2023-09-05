import { deserializeIntoClonePostRequestBody } from './deserializeIntoClonePostRequestBody';
import { type ClonePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createClonePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoClonePostRequestBody;
}
