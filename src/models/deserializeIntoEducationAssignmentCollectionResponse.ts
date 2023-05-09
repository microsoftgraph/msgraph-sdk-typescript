import {createEducationAssignmentFromDiscriminatorValue} from './createEducationAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {EducationAssignment} from './educationAssignment';
import {EducationAssignmentCollectionResponse} from './educationAssignmentCollectionResponse';
import {serializeEducationAssignment} from './serializeEducationAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentCollectionResponse(educationAssignmentCollectionResponse: EducationAssignmentCollectionResponse | undefined = {} as EducationAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationAssignmentCollectionResponse),
        "value": n => { educationAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<EducationAssignment>(createEducationAssignmentFromDiscriminatorValue); },
    }
}
