import { createEducationSubmissionFromDiscriminatorValue } from './createEducationSubmissionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type EducationSubmission } from './educationSubmission';
import { type EducationSubmissionCollectionResponse } from './educationSubmissionCollectionResponse';
import { serializeEducationSubmission } from './serializeEducationSubmission';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmissionCollectionResponse(educationSubmissionCollectionResponse: EducationSubmissionCollectionResponse | undefined = {} as EducationSubmissionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationSubmissionCollectionResponse),
        "value": n => { educationSubmissionCollectionResponse.value = n.getCollectionOfObjectValues<EducationSubmission>(createEducationSubmissionFromDiscriminatorValue); },
    }
}
