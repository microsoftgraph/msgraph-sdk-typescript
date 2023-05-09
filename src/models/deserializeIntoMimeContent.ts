import {MimeContent} from './mimeContent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMimeContent(mimeContent: MimeContent | undefined = {} as MimeContent) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { mimeContent.odataType = n.getStringValue(); },
        "type": n => { mimeContent.type = n.getStringValue(); },
        "value": n => { mimeContent.value = n.getStringValue(); },
    }
}
