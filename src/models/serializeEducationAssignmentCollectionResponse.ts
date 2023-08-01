import type {EducationAssignment} from './educationAssignment';
import type {EducationAssignmentCollectionResponse} from './educationAssignmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationAssignment} from './serializeEducationAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentCollectionResponse(writer: SerializationWriter, educationAssignmentCollectionResponse: EducationAssignmentCollectionResponse | undefined = {} as EducationAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationAssignment>("value", educationAssignmentCollectionResponse.value, serializeEducationAssignment);
}
