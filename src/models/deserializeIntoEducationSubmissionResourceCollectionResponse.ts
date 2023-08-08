import {createEducationSubmissionResourceFromDiscriminatorValue} from './createEducationSubmissionResourceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {EducationSubmissionResource} from './educationSubmissionResource';
import type {EducationSubmissionResourceCollectionResponse} from './educationSubmissionResourceCollectionResponse';
import {serializeEducationSubmissionResource} from './serializeEducationSubmissionResource';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmissionResourceCollectionResponse(educationSubmissionResourceCollectionResponse: EducationSubmissionResourceCollectionResponse | undefined = {} as EducationSubmissionResourceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationSubmissionResourceCollectionResponse),
        "value": n => { educationSubmissionResourceCollectionResponse.value = n.getCollectionOfObjectValues<EducationSubmissionResource>(createEducationSubmissionResourceFromDiscriminatorValue); },
    }
}
