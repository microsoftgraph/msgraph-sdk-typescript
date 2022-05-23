import {PresenceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPresenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : PresenceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PresenceImpl();
}
