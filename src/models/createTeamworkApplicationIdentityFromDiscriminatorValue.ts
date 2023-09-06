import { deserializeIntoTeamworkApplicationIdentity } from './deserializeIntoTeamworkApplicationIdentity';
import { type TeamworkApplicationIdentity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamworkApplicationIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkApplicationIdentity;
}
