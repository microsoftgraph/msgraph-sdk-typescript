import {EducationSubmission} from './educationSubmission';
import {EducationSubmissionCollectionResponse} from './educationSubmissionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationSubmission} from './serializeEducationSubmission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionCollectionResponse(educationSubmissionCollectionResponse: EducationSubmissionCollectionResponse | undefined = {} as EducationSubmissionCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationSubmissionCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationSubmission>("value", educationSubmissionCollectionResponse.value, serializeEducationSubmission);
}
