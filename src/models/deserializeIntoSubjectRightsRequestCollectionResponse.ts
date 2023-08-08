import {createSubjectRightsRequestFromDiscriminatorValue} from './createSubjectRightsRequestFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSubjectRightsRequest} from './serializeSubjectRightsRequest';
import type {SubjectRightsRequest} from './subjectRightsRequest';
import type {SubjectRightsRequestCollectionResponse} from './subjectRightsRequestCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestCollectionResponse(subjectRightsRequestCollectionResponse: SubjectRightsRequestCollectionResponse | undefined = {} as SubjectRightsRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(subjectRightsRequestCollectionResponse),
        "value": n => { subjectRightsRequestCollectionResponse.value = n.getCollectionOfObjectValues<SubjectRightsRequest>(createSubjectRightsRequestFromDiscriminatorValue); },
    }
}
