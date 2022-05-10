import {CreateReplyAllRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateReplyAllRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateReplyAllRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateReplyAllRequestBodyImpl();
}
