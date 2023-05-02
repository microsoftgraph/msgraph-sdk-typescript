import {deserializeIntoTeamworkUserIdentity} from './deserializeIntoTeamworkUserIdentity';
import {TeamworkUserIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkUserIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkUserIdentity;
}
