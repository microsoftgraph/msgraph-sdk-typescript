import {GetFinalAttachmentResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetFinalAttachmentResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetFinalAttachmentResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetFinalAttachmentResponseImpl();
}
