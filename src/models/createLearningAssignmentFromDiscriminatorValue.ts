import {deserializeIntoLearningAssignment} from './deserializeIntoLearningAssignment';
import {LearningAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLearningAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLearningAssignment;
}
