import { deserializeIntoIdentity } from './deserializeIntoIdentity';
import { type TeamworkTagIdentity } from './teamworkTagIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkTagIdentity(teamworkTagIdentity: TeamworkTagIdentity | undefined = {} as TeamworkTagIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(teamworkTagIdentity),
    }
}
