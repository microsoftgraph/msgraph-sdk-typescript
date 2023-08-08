import type {ThumbnailColumn} from './thumbnailColumn';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThumbnailColumn(writer: SerializationWriter, thumbnailColumn: ThumbnailColumn | undefined = {} as ThumbnailColumn) : void {
        writer.writeStringValue("@odata.type", thumbnailColumn.odataType);
        writer.writeAdditionalData(thumbnailColumn.additionalData);
}
