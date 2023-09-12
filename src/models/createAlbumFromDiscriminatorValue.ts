import { deserializeIntoAlbum } from './deserializeIntoAlbum';
import { type Album } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAlbumFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAlbum;
}
