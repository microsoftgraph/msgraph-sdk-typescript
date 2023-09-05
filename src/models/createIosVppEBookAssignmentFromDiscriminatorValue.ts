import { deserializeIntoIosVppEBookAssignment } from './deserializeIntoIosVppEBookAssignment';
import { type IosVppEBookAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosVppEBookAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosVppEBookAssignment;
}
