import {EducationAssignmentResource} from './educationAssignmentResource';
import {EducationAssignmentResourceCollectionResponse} from './educationAssignmentResourceCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationAssignmentResource} from './serializeEducationAssignmentResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentResourceCollectionResponse(writer: SerializationWriter, educationAssignmentResourceCollectionResponse: EducationAssignmentResourceCollectionResponse | undefined = {} as EducationAssignmentResourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationAssignmentResourceCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationAssignmentResource>("value", educationAssignmentResourceCollectionResponse.value, serializeEducationAssignmentResource);
}
