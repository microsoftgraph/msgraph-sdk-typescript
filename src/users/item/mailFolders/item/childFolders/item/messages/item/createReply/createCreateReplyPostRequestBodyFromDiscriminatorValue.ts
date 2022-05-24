import {CreateReplyPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateReplyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateReplyPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateReplyPostRequestBodyImpl();
}
