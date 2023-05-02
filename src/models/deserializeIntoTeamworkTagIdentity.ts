import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {TeamworkTagIdentity} from './teamworkTagIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkTagIdentity(teamworkTagIdentity: TeamworkTagIdentity | undefined = {} as TeamworkTagIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(teamworkTagIdentity),
    }
}
