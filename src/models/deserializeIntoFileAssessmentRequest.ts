import {deserializeIntoThreatAssessmentRequest} from './deserializeIntoThreatAssessmentRequest';
import {FileAssessmentRequest} from './fileAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFileAssessmentRequest(fileAssessmentRequest: FileAssessmentRequest | undefined = {} as FileAssessmentRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoThreatAssessmentRequest(fileAssessmentRequest),
        "contentData": n => { fileAssessmentRequest.contentData = n.getStringValue(); },
        "fileName": n => { fileAssessmentRequest.fileName = n.getStringValue(); },
    }
}
