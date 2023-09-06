import { deserializeIntoEducationAssignmentResource } from './deserializeIntoEducationAssignmentResource';
import { type EducationAssignmentResource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationAssignmentResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignmentResource;
}
