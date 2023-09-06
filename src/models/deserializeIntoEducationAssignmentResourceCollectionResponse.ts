import { createEducationAssignmentResourceFromDiscriminatorValue } from './createEducationAssignmentResourceFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type EducationAssignmentResource } from './educationAssignmentResource';
import { type EducationAssignmentResourceCollectionResponse } from './educationAssignmentResourceCollectionResponse';
import { serializeEducationAssignmentResource } from './serializeEducationAssignmentResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentResourceCollectionResponse(educationAssignmentResourceCollectionResponse: EducationAssignmentResourceCollectionResponse | undefined = {} as EducationAssignmentResourceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationAssignmentResourceCollectionResponse),
        "value": n => { educationAssignmentResourceCollectionResponse.value = n.getCollectionOfObjectValues<EducationAssignmentResource>(createEducationAssignmentResourceFromDiscriminatorValue); },
    }
}
