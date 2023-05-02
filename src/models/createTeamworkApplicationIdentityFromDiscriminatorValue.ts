import {deserializeIntoTeamworkApplicationIdentity} from './deserializeIntoTeamworkApplicationIdentity';
import {TeamworkApplicationIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkApplicationIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkApplicationIdentity;
}
