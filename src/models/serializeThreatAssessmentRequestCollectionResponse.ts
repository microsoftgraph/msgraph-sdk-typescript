import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {ThreatAssessmentRequestCollectionResponse} from './threatAssessmentRequestCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThreatAssessmentRequestCollectionResponse(writer: SerializationWriter, threatAssessmentRequestCollectionResponse: ThreatAssessmentRequestCollectionResponse | undefined = {} as ThreatAssessmentRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, threatAssessmentRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<ThreatAssessmentRequest>("value", threatAssessmentRequestCollectionResponse.value, serializeThreatAssessmentRequest);
}
