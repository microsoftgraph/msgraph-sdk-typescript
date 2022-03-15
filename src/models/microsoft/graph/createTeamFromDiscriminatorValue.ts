import {Team} from './team';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamFromDiscriminatorValue(parseNode: ParseNode | undefined) : Team {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Team();
}
