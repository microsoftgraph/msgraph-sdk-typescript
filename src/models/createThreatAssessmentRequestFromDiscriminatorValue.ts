import {EmailFileAssessmentRequest, FileAssessmentRequest, MailAssessmentRequest, ThreatAssessmentRequest, UrlAssessmentRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThreatAssessmentRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.emailFileAssessmentRequest":
                    return new EmailFileAssessmentRequest();
                case "#microsoft.graph.fileAssessmentRequest":
                    return new FileAssessmentRequest();
                case "#microsoft.graph.mailAssessmentRequest":
                    return new MailAssessmentRequest();
                case "#microsoft.graph.urlAssessmentRequest":
                    return new UrlAssessmentRequest();
            }
        }
    }
    return new ThreatAssessmentRequest();
}
