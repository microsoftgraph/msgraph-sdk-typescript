import {deserializeIntoTeamworkTagIdentity} from './deserializeIntoTeamworkTagIdentity';
import {TeamworkTagIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkTagIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkTagIdentity;
}
