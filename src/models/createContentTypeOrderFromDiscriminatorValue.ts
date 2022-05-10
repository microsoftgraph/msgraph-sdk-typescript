import {ContentTypeOrderImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContentTypeOrderFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContentTypeOrderImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContentTypeOrderImpl();
}
