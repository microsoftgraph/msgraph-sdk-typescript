import {EducationSubmissionResource} from './educationSubmissionResource';
import {EducationSubmissionResourceCollectionResponse} from './educationSubmissionResourceCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationSubmissionResource} from './serializeEducationSubmissionResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionResourceCollectionResponse(educationSubmissionResourceCollectionResponse: EducationSubmissionResourceCollectionResponse | undefined = {} as EducationSubmissionResourceCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationSubmissionResourceCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationSubmissionResource>("value", educationSubmissionResourceCollectionResponse.value, serializeEducationSubmissionResource);
}
