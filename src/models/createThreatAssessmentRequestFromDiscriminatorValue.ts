import {deserializeIntoEmailFileAssessmentRequest} from './deserializeIntoEmailFileAssessmentRequest';
import {deserializeIntoFileAssessmentRequest} from './deserializeIntoFileAssessmentRequest';
import {deserializeIntoMailAssessmentRequest} from './deserializeIntoMailAssessmentRequest';
import {deserializeIntoThreatAssessmentRequest} from './deserializeIntoThreatAssessmentRequest';
import {deserializeIntoUrlAssessmentRequest} from './deserializeIntoUrlAssessmentRequest';
import {EmailFileAssessmentRequest, FileAssessmentRequest, MailAssessmentRequest, ThreatAssessmentRequest, UrlAssessmentRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.emailFileAssessmentRequest":
                    return deserializeIntoEmailFileAssessmentRequest;
                case "#microsoft.graph.fileAssessmentRequest":
                    return deserializeIntoFileAssessmentRequest;
                case "#microsoft.graph.mailAssessmentRequest":
                    return deserializeIntoMailAssessmentRequest;
                case "#microsoft.graph.urlAssessmentRequest":
                    return deserializeIntoUrlAssessmentRequest;
            }
        }
    }
    return deserializeIntoThreatAssessmentRequest;
}
