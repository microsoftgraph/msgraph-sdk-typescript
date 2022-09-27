import {AddLargeGalleryViewOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddLargeGalleryViewOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddLargeGalleryViewOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddLargeGalleryViewOperationCollectionResponse();
}
