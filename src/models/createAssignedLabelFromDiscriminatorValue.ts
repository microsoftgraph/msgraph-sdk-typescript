import { deserializeIntoAssignedLabel } from './deserializeIntoAssignedLabel';
import { type AssignedLabel } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAssignedLabelFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssignedLabel;
}
