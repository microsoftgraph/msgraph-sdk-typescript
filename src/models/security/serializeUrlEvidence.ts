import { serializeAlertEvidence } from './serializeAlertEvidence';
import { type UrlEvidence } from './urlEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUrlEvidence(writer: SerializationWriter, urlEvidence: UrlEvidence | undefined = {} as UrlEvidence) : void {
        serializeAlertEvidence(writer, urlEvidence)
        writer.writeStringValue("url", urlEvidence.url);
}
