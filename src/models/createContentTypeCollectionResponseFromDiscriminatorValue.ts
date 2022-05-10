import {ContentTypeCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContentTypeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContentTypeCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContentTypeCollectionResponseImpl();
}
