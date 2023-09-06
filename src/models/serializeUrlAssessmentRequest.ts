import { serializeThreatAssessmentRequest } from './serializeThreatAssessmentRequest';
import { type UrlAssessmentRequest } from './urlAssessmentRequest';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUrlAssessmentRequest(writer: SerializationWriter, urlAssessmentRequest: UrlAssessmentRequest | undefined = {} as UrlAssessmentRequest) : void {
        serializeThreatAssessmentRequest(writer, urlAssessmentRequest)
        writer.writeStringValue("url", urlAssessmentRequest.url);
}
