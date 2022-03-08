import {AssignedLabel} from './assignedLabel';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignedLabelFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignedLabel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignedLabel();
}
