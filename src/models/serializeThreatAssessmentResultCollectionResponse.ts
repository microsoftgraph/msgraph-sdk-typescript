import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeThreatAssessmentResult } from './serializeThreatAssessmentResult';
import { type ThreatAssessmentResult } from './threatAssessmentResult';
import { type ThreatAssessmentResultCollectionResponse } from './threatAssessmentResultCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeThreatAssessmentResultCollectionResponse(writer: SerializationWriter, threatAssessmentResultCollectionResponse: ThreatAssessmentResultCollectionResponse | undefined = {} as ThreatAssessmentResultCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, threatAssessmentResultCollectionResponse)
        writer.writeCollectionOfObjectValues<ThreatAssessmentResult>("value", threatAssessmentResultCollectionResponse.value, serializeThreatAssessmentResult);
}
