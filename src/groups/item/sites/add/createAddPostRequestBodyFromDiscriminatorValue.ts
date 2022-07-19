import {AddPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddPostRequestBody();
}
