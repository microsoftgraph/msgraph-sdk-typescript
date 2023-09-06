import { deserializeIntoThumbnail } from './deserializeIntoThumbnail';
import { type Thumbnail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createThumbnailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoThumbnail;
}
