import {ThumbnailColumn} from './thumbnailColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThumbnailColumn(thumbnailColumn: ThumbnailColumn | undefined = {} as ThumbnailColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { thumbnailColumn.odataType = n.getStringValue(); },
    }
}
