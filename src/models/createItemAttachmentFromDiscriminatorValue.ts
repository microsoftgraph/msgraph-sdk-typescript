import {ItemAttachmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemAttachmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemAttachmentImpl();
}
