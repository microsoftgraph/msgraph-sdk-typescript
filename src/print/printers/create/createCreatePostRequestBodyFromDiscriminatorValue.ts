import {CreatePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreatePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreatePostRequestBodyImpl();
}
