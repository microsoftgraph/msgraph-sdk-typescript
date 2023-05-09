import {deserializeIntoThumbnailSet} from './deserializeIntoThumbnailSet';
import {ThumbnailSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThumbnailSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoThumbnailSet;
}
