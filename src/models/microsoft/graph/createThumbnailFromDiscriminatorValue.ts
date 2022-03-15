import {Thumbnail} from './thumbnail';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThumbnailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Thumbnail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Thumbnail();
}
