import { deserializeIntoAssignPostRequestBody } from './deserializeIntoAssignPostRequestBody';
import { type AssignPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAssignPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssignPostRequestBody;
}
