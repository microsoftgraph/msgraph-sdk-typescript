import {ContentTypeInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContentTypeInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContentTypeInfoCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContentTypeInfoCollectionResponse();
}
