import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {PrintDocument} from './printDocument';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintDocument(printDocument: PrintDocument | undefined = {} as PrintDocument) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printDocument),
        "contentType": n => { printDocument.contentType = n.getStringValue(); },
        "displayName": n => { printDocument.displayName = n.getStringValue(); },
        "size": n => { printDocument.size = n.getNumberValue(); },
    }
}
