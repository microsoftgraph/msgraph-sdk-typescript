import {ContentTypeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContentTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContentTypeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContentTypeImpl();
}
