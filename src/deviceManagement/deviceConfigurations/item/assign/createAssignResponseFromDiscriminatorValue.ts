import { deserializeIntoAssignResponse } from './deserializeIntoAssignResponse';
import { type AssignResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAssignResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssignResponse;
}
