import {TeamworkApplicationIdentityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkApplicationIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkApplicationIdentityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkApplicationIdentityImpl();
}
