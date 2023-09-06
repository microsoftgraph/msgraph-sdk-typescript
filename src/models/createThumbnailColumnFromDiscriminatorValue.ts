import { deserializeIntoThumbnailColumn } from './deserializeIntoThumbnailColumn';
import { type ThumbnailColumn } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createThumbnailColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoThumbnailColumn;
}
