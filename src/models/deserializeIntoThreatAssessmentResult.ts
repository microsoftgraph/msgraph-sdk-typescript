import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ThreatAssessmentResult} from './threatAssessmentResult';
import {ThreatAssessmentResultType} from './threatAssessmentResultType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThreatAssessmentResult(threatAssessmentResult: ThreatAssessmentResult | undefined = {} as ThreatAssessmentResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(threatAssessmentResult),
        "createdDateTime": n => { threatAssessmentResult.createdDateTime = n.getDateValue(); },
        "message": n => { threatAssessmentResult.message = n.getStringValue(); },
        "resultType": n => { threatAssessmentResult.resultType = n.getEnumValue<ThreatAssessmentResultType>(ThreatAssessmentResultType); },
    }
}
