import {RedirectPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRedirectPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RedirectPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RedirectPostRequestBody();
}
