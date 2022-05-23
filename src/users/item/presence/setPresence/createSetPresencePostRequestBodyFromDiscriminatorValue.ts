import {SetPresencePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetPresencePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetPresencePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetPresencePostRequestBodyImpl();
}
