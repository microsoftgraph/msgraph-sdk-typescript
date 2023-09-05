import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type TeamworkBot } from './teamworkBot';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkBot(teamworkBot: TeamworkBot | undefined = {} as TeamworkBot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamworkBot),
    }
}
