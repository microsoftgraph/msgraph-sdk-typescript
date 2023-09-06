import { deserializeIntoTeam } from './deserializeIntoTeam';
import { type Team } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeam;
}
