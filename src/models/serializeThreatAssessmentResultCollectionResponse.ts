import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeThreatAssessmentResult} from './serializeThreatAssessmentResult';
import {ThreatAssessmentResult} from './threatAssessmentResult';
import {ThreatAssessmentResultCollectionResponse} from './threatAssessmentResultCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThreatAssessmentResultCollectionResponse(writer: SerializationWriter, threatAssessmentResultCollectionResponse: ThreatAssessmentResultCollectionResponse | undefined = {} as ThreatAssessmentResultCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, threatAssessmentResultCollectionResponse)
        writer.writeCollectionOfObjectValues<ThreatAssessmentResult>("value", threatAssessmentResultCollectionResponse.value, serializeThreatAssessmentResult);
}
