import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import {UrlAssessmentRequest} from './urlAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUrlAssessmentRequest(writer: SerializationWriter, urlAssessmentRequest: UrlAssessmentRequest | undefined = {} as UrlAssessmentRequest) : void {
        serializeThreatAssessmentRequest(writer, urlAssessmentRequest)
        writer.writeStringValue("url", urlAssessmentRequest.url);
}
