import {TeamworkUserIdentityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkUserIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkUserIdentityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkUserIdentityImpl();
}
