import {HyperlinkOrPictureColumn} from './hyperlinkOrPictureColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHyperlinkOrPictureColumn(hyperlinkOrPictureColumn: HyperlinkOrPictureColumn | undefined = {} as HyperlinkOrPictureColumn, writer: SerializationWriter) : void {
        writer.writeBooleanValue("isPicture", hyperlinkOrPictureColumn.isPicture);
        writer.writeStringValue("@odata.type", hyperlinkOrPictureColumn.odataType);
        writer.writeAdditionalData(hyperlinkOrPictureColumn.additionalData);
}
