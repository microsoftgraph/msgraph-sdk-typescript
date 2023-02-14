import {CreateReplyAllPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateReplyAllPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateReplyAllPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateReplyAllPostRequestBody();
}
