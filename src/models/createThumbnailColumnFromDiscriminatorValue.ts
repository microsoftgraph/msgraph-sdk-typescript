import {ThumbnailColumnImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThumbnailColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThumbnailColumnImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThumbnailColumnImpl();
}
