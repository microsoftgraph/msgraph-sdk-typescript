import { deserializeIntoThumbnailSet } from './deserializeIntoThumbnailSet';
import { type ThumbnailSet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createThumbnailSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoThumbnailSet;
}
