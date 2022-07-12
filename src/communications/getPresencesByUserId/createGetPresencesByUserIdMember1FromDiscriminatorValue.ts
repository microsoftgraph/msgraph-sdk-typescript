import {GetPresencesByUserIdMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPresencesByUserIdMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPresencesByUserIdMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPresencesByUserIdMember1();
}
