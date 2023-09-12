import { deserializeIntoUnhideForUserPostRequestBody } from './deserializeIntoUnhideForUserPostRequestBody';
import { type UnhideForUserPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnhideForUserPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnhideForUserPostRequestBody;
}
