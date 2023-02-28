import {EdatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdatePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdatePostRequestBody();
}
