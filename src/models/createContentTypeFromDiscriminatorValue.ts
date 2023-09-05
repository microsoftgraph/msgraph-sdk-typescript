import { deserializeIntoContentType } from './deserializeIntoContentType';
import { type ContentType } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContentTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContentType;
}
