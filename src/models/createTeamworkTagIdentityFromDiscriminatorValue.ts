import {TeamworkTagIdentityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkTagIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkTagIdentityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkTagIdentityImpl();
}
