import {ThreatAssessmentRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThreatAssessmentRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThreatAssessmentRequestImpl();
}
