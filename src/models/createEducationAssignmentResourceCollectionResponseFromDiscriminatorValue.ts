import { deserializeIntoEducationAssignmentResourceCollectionResponse } from './deserializeIntoEducationAssignmentResourceCollectionResponse';
import { type EducationAssignmentResourceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationAssignmentResourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignmentResourceCollectionResponse;
}
