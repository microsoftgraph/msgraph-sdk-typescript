import {ThreatAssessmentResultImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatAssessmentResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThreatAssessmentResultImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThreatAssessmentResultImpl();
}
