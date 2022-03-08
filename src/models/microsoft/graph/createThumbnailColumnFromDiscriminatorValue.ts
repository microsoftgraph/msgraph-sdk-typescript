import {ThumbnailColumn} from './thumbnailColumn';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThumbnailColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThumbnailColumn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThumbnailColumn();
}
