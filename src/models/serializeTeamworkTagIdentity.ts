import { serializeIdentity } from './serializeIdentity';
import { type TeamworkTagIdentity } from './teamworkTagIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamworkTagIdentity(writer: SerializationWriter, teamworkTagIdentity: TeamworkTagIdentity | undefined = {} as TeamworkTagIdentity) : void {
        serializeIdentity(writer, teamworkTagIdentity)
}
