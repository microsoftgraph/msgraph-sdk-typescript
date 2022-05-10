import {ThumbnailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThumbnailFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThumbnailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThumbnailImpl();
}
