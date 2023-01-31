import {GrantPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGrantPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GrantPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GrantPostRequestBody();
}
