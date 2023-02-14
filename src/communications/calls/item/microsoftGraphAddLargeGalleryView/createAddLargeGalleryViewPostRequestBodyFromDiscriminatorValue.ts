import {AddLargeGalleryViewPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddLargeGalleryViewPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddLargeGalleryViewPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddLargeGalleryViewPostRequestBody();
}
