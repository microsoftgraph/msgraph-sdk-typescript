import { type ThumbnailColumn } from './thumbnailColumn';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoThumbnailColumn(thumbnailColumn: ThumbnailColumn | undefined = {} as ThumbnailColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { thumbnailColumn.odataType = n.getStringValue(); },
    }
}
