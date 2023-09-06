import { deserializeIntoTeamsTab } from './deserializeIntoTeamsTab';
import { type TeamsTab } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsTabFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsTab;
}
