import {ThumbnailSetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThumbnailSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThumbnailSetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThumbnailSetImpl();
}
