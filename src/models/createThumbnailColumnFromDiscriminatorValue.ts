import {deserializeIntoThumbnailColumn} from './deserializeIntoThumbnailColumn';
import {ThumbnailColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThumbnailColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoThumbnailColumn;
}
