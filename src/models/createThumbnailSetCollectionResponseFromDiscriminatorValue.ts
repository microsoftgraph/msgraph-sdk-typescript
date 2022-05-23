import {ThumbnailSetCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThumbnailSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThumbnailSetCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThumbnailSetCollectionResponseImpl();
}
