import {GrantPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGrantPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GrantPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GrantPostRequestBodyImpl();
}
