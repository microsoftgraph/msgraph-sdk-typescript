import {EducationAssignment} from './educationAssignment';
import {EducationAssignmentCollectionResponse} from './educationAssignmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationAssignment} from './serializeEducationAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentCollectionResponse(educationAssignmentCollectionResponse: EducationAssignmentCollectionResponse | undefined = {} as EducationAssignmentCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationAssignment>("value", educationAssignmentCollectionResponse.value, serializeEducationAssignment);
}
