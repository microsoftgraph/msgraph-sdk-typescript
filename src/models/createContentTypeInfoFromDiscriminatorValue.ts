import { deserializeIntoContentTypeInfo } from './deserializeIntoContentTypeInfo';
import { type ContentTypeInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContentTypeInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContentTypeInfo;
}
