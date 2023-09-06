import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeThreatAssessmentRequest } from './serializeThreatAssessmentRequest';
import { type ThreatAssessmentRequest } from './threatAssessmentRequest';
import { type ThreatAssessmentRequestCollectionResponse } from './threatAssessmentRequestCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeThreatAssessmentRequestCollectionResponse(writer: SerializationWriter, threatAssessmentRequestCollectionResponse: ThreatAssessmentRequestCollectionResponse | undefined = {} as ThreatAssessmentRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, threatAssessmentRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<ThreatAssessmentRequest>("value", threatAssessmentRequestCollectionResponse.value, serializeThreatAssessmentRequest);
}
