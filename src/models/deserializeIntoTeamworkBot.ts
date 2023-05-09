import {deserializeIntoEntity} from './deserializeIntoEntity';
import {TeamworkBot} from './teamworkBot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkBot(teamworkBot: TeamworkBot | undefined = {} as TeamworkBot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamworkBot),
    }
}
