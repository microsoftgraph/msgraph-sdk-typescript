import {createEducationSubmissionFromDiscriminatorValue} from './createEducationSubmissionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {EducationSubmission} from './educationSubmission';
import {EducationSubmissionCollectionResponse} from './educationSubmissionCollectionResponse';
import {serializeEducationSubmission} from './serializeEducationSubmission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmissionCollectionResponse(educationSubmissionCollectionResponse: EducationSubmissionCollectionResponse | undefined = {} as EducationSubmissionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationSubmissionCollectionResponse),
        "value": n => { educationSubmissionCollectionResponse.value = n.getCollectionOfObjectValues<EducationSubmission>(createEducationSubmissionFromDiscriminatorValue); },
    }
}
