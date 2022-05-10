import {ClearPresenceRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClearPresenceRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClearPresenceRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClearPresenceRequestBodyImpl();
}
