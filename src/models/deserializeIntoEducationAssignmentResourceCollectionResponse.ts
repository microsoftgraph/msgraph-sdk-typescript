import {createEducationAssignmentResourceFromDiscriminatorValue} from './createEducationAssignmentResourceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {EducationAssignmentResource} from './educationAssignmentResource';
import {EducationAssignmentResourceCollectionResponse} from './educationAssignmentResourceCollectionResponse';
import {serializeEducationAssignmentResource} from './serializeEducationAssignmentResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentResourceCollectionResponse(educationAssignmentResourceCollectionResponse: EducationAssignmentResourceCollectionResponse | undefined = {} as EducationAssignmentResourceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationAssignmentResourceCollectionResponse),
        "value": n => { educationAssignmentResourceCollectionResponse.value = n.getCollectionOfObjectValues<EducationAssignmentResource>(createEducationAssignmentResourceFromDiscriminatorValue); },
    }
}
