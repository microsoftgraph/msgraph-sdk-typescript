import {deserializeIntoContentTypeOrder} from './deserializeIntoContentTypeOrder';
import {ContentTypeOrder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContentTypeOrderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContentTypeOrder;
}
