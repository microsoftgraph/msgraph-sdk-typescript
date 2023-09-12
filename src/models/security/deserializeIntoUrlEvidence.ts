import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { type UrlEvidence } from './urlEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUrlEvidence(urlEvidence: UrlEvidence | undefined = {} as UrlEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(urlEvidence),
        "url": n => { urlEvidence.url = n.getStringValue(); },
    }
}
