import {deserializeIntoContentType} from './deserializeIntoContentType';
import {ContentType} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContentTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContentType;
}
