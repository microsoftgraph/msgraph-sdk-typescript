import {Hyperlink} from './hyperlink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHyperlink(hyperlink: Hyperlink | undefined = {} as Hyperlink) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { hyperlink.name = n.getStringValue(); },
        "@odata.type": n => { hyperlink.odataType = n.getStringValue(); },
        "url": n => { hyperlink.url = n.getStringValue(); },
    }
}
