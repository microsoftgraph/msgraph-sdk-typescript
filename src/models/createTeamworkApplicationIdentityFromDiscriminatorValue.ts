import {TeamworkApplicationIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkApplicationIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkApplicationIdentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkApplicationIdentity();
}
