import {ThreatAssessmentRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThreatAssessmentRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.threatAssessmentRequest":
                    return new ThreatAssessmentRequestImpl();
            }
        }
    }
    return new ThreatAssessmentRequestImpl();
}
