import { deserializeIntoTeamworkBot } from './deserializeIntoTeamworkBot';
import { type TeamworkBot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamworkBotFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkBot;
}
