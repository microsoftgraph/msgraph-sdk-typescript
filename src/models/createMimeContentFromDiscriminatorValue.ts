import { deserializeIntoMimeContent } from './deserializeIntoMimeContent';
import { type MimeContent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMimeContentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMimeContent;
}
