import {FileAssessmentRequest} from './fileAssessmentRequest';
import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileAssessmentRequest(fileAssessmentRequest: FileAssessmentRequest | undefined = {} as FileAssessmentRequest, writer: SerializationWriter) : void {
        serializeThreatAssessmentRequest(writer, fileAssessmentRequest)
        writer.writeStringValue("contentData", fileAssessmentRequest.contentData);
        writer.writeStringValue("fileName", fileAssessmentRequest.fileName);
}
