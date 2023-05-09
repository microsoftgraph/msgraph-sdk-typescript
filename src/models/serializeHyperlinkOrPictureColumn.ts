import {HyperlinkOrPictureColumn} from './hyperlinkOrPictureColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHyperlinkOrPictureColumn(writer: SerializationWriter, hyperlinkOrPictureColumn: HyperlinkOrPictureColumn | undefined = {} as HyperlinkOrPictureColumn) : void {
        writer.writeBooleanValue("isPicture", hyperlinkOrPictureColumn.isPicture);
        writer.writeStringValue("@odata.type", hyperlinkOrPictureColumn.odataType);
        writer.writeAdditionalData(hyperlinkOrPictureColumn.additionalData);
}
