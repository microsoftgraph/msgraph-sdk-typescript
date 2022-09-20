import {ContentSharingSessionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContentSharingSessionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContentSharingSessionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContentSharingSessionCollectionResponse();
}
