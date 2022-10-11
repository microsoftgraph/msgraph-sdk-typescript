import {AddLargeGalleryViewOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddLargeGalleryViewOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddLargeGalleryViewOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddLargeGalleryViewOperation();
}
