import { type FileAssessmentRequest } from './fileAssessmentRequest';
import { serializeThreatAssessmentRequest } from './serializeThreatAssessmentRequest';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFileAssessmentRequest(writer: SerializationWriter, fileAssessmentRequest: FileAssessmentRequest | undefined = {} as FileAssessmentRequest) : void {
        serializeThreatAssessmentRequest(writer, fileAssessmentRequest)
        writer.writeStringValue("contentData", fileAssessmentRequest.contentData);
        writer.writeStringValue("fileName", fileAssessmentRequest.fileName);
}
