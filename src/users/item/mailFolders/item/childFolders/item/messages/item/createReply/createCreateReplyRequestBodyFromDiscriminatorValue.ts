import {CreateReplyRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateReplyRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateReplyRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateReplyRequestBodyImpl();
}
