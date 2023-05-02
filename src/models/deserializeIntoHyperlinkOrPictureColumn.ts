import {HyperlinkOrPictureColumn} from './hyperlinkOrPictureColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHyperlinkOrPictureColumn(hyperlinkOrPictureColumn: HyperlinkOrPictureColumn | undefined = {} as HyperlinkOrPictureColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "isPicture": n => { hyperlinkOrPictureColumn.isPicture = n.getBooleanValue(); },
        "@odata.type": n => { hyperlinkOrPictureColumn.odataType = n.getStringValue(); },
    }
}
