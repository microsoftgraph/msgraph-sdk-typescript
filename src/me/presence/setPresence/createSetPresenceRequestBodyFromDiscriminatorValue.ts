import {SetPresenceRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetPresenceRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetPresenceRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetPresenceRequestBodyImpl();
}
