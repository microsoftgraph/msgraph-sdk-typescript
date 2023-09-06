import { type EducationSubmissionResource } from './educationSubmissionResource';
import { type EducationSubmissionResourceCollectionResponse } from './educationSubmissionResourceCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeEducationSubmissionResource } from './serializeEducationSubmissionResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionResourceCollectionResponse(writer: SerializationWriter, educationSubmissionResourceCollectionResponse: EducationSubmissionResourceCollectionResponse | undefined = {} as EducationSubmissionResourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationSubmissionResourceCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationSubmissionResource>("value", educationSubmissionResourceCollectionResponse.value, serializeEducationSubmissionResource);
}
