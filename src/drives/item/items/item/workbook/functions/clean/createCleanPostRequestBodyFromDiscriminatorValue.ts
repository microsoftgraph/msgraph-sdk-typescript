import { deserializeIntoCleanPostRequestBody } from './deserializeIntoCleanPostRequestBody';
import { type CleanPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCleanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCleanPostRequestBody;
}
