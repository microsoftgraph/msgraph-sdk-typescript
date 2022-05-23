import {PostImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPostFromDiscriminatorValue(parseNode: ParseNode | undefined) : PostImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PostImpl();
}
