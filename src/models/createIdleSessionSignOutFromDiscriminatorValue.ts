import {IdleSessionSignOut} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdleSessionSignOutFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdleSessionSignOut {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdleSessionSignOut();
}
