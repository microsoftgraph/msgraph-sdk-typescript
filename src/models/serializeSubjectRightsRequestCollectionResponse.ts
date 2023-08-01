import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSubjectRightsRequest} from './serializeSubjectRightsRequest';
import type {SubjectRightsRequest} from './subjectRightsRequest';
import type {SubjectRightsRequestCollectionResponse} from './subjectRightsRequestCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestCollectionResponse(writer: SerializationWriter, subjectRightsRequestCollectionResponse: SubjectRightsRequestCollectionResponse | undefined = {} as SubjectRightsRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, subjectRightsRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<SubjectRightsRequest>("value", subjectRightsRequestCollectionResponse.value, serializeSubjectRightsRequest);
}
