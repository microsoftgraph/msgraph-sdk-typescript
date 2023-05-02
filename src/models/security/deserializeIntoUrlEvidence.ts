import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {UrlEvidence} from './urlEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUrlEvidence(urlEvidence: UrlEvidence | undefined = {} as UrlEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(urlEvidence),
        "url": n => { urlEvidence.url = n.getStringValue(); },
    }
}
