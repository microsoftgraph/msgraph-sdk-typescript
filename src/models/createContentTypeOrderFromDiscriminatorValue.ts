import { deserializeIntoContentTypeOrder } from './deserializeIntoContentTypeOrder';
import { type ContentTypeOrder } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContentTypeOrderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContentTypeOrder;
}
