import {SignPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSignPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SignPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SignPostRequestBody();
}
