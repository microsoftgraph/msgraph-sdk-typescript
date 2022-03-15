import {RedirectRequestBody} from './redirectRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRedirectRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RedirectRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RedirectRequestBody();
}
