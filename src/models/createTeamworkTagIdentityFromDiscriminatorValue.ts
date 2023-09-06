import { deserializeIntoTeamworkTagIdentity } from './deserializeIntoTeamworkTagIdentity';
import { type TeamworkTagIdentity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamworkTagIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkTagIdentity;
}
