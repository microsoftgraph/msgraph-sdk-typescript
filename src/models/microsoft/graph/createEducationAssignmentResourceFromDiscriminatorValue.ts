import {EducationAssignmentResource} from './educationAssignmentResource';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentResource();
}
