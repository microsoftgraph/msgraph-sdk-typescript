import {deserializeIntoEducationAssignment} from './deserializeIntoEducationAssignment';
import {EducationAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignment;
}
