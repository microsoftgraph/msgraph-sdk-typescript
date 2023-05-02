import {deserializeIntoThreatAssessmentResult} from './deserializeIntoThreatAssessmentResult';
import {ThreatAssessmentResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatAssessmentResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoThreatAssessmentResult;
}
