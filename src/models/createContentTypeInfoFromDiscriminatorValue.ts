import {ContentTypeInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContentTypeInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContentTypeInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContentTypeInfoImpl();
}
