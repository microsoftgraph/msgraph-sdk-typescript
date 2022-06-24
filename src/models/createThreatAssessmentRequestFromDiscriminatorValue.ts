import {EmailFileAssessmentRequestImpl, FileAssessmentRequestImpl, MailAssessmentRequestImpl, ThreatAssessmentRequestImpl, UrlAssessmentRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThreatAssessmentRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.emailFileAssessmentRequest":
                    return new EmailFileAssessmentRequestImpl();
                case "#microsoft.graph.fileAssessmentRequest":
                    return new FileAssessmentRequestImpl();
                case "#microsoft.graph.mailAssessmentRequest":
                    return new MailAssessmentRequestImpl();
                case "#microsoft.graph.urlAssessmentRequest":
                    return new UrlAssessmentRequestImpl();
            }
        }
    }
    return new ThreatAssessmentRequestImpl();
}
