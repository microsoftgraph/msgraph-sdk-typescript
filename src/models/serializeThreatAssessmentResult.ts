import {serializeEntity} from './serializeEntity';
import {ThreatAssessmentResult} from './threatAssessmentResult';
import {ThreatAssessmentResultType} from './threatAssessmentResultType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThreatAssessmentResult(writer: SerializationWriter, threatAssessmentResult: ThreatAssessmentResult | undefined = {} as ThreatAssessmentResult) : void {
        serializeEntity(writer, threatAssessmentResult)
        writer.writeDateValue("createdDateTime", threatAssessmentResult.createdDateTime);
        writer.writeStringValue("message", threatAssessmentResult.message);
        writer.writeEnumValue<ThreatAssessmentResultType>("resultType", threatAssessmentResult.resultType);
}
