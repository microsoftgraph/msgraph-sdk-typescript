import {AlbumImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlbumFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlbumImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlbumImpl();
}
