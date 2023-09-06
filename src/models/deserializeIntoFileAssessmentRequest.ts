import { deserializeIntoThreatAssessmentRequest } from './deserializeIntoThreatAssessmentRequest';
import { type FileAssessmentRequest } from './fileAssessmentRequest';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFileAssessmentRequest(fileAssessmentRequest: FileAssessmentRequest | undefined = {} as FileAssessmentRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoThreatAssessmentRequest(fileAssessmentRequest),
        "contentData": n => { fileAssessmentRequest.contentData = n.getStringValue(); },
        "fileName": n => { fileAssessmentRequest.fileName = n.getStringValue(); },
    }
}
