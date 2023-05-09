import {serializeAlertEvidence} from './serializeAlertEvidence';
import {UrlEvidence} from './urlEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUrlEvidence(writer: SerializationWriter, urlEvidence: UrlEvidence | undefined = {} as UrlEvidence) : void {
        serializeAlertEvidence(writer, urlEvidence)
        writer.writeStringValue("url", urlEvidence.url);
}
