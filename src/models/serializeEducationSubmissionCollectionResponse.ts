import type {EducationSubmission} from './educationSubmission';
import type {EducationSubmissionCollectionResponse} from './educationSubmissionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationSubmission} from './serializeEducationSubmission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionCollectionResponse(writer: SerializationWriter, educationSubmissionCollectionResponse: EducationSubmissionCollectionResponse | undefined = {} as EducationSubmissionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationSubmissionCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationSubmission>("value", educationSubmissionCollectionResponse.value, serializeEducationSubmission);
}
