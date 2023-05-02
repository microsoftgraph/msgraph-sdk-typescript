import {createEducationSubmissionResourceFromDiscriminatorValue} from './createEducationSubmissionResourceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {EducationSubmissionResource} from './educationSubmissionResource';
import {EducationSubmissionResourceCollectionResponse} from './educationSubmissionResourceCollectionResponse';
import {serializeEducationSubmissionResource} from './serializeEducationSubmissionResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmissionResourceCollectionResponse(educationSubmissionResourceCollectionResponse: EducationSubmissionResourceCollectionResponse | undefined = {} as EducationSubmissionResourceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationSubmissionResourceCollectionResponse),
        "value": n => { educationSubmissionResourceCollectionResponse.value = n.getCollectionOfObjectValues<EducationSubmissionResource>(createEducationSubmissionResourceFromDiscriminatorValue); },
    }
}
