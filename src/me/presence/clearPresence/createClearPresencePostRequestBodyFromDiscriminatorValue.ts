import {ClearPresencePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClearPresencePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClearPresencePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClearPresencePostRequestBodyImpl();
}
