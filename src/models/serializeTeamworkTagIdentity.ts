import {serializeIdentity} from './serializeIdentity';
import {TeamworkTagIdentity} from './teamworkTagIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkTagIdentity(writer: SerializationWriter, teamworkTagIdentity: TeamworkTagIdentity | undefined = {} as TeamworkTagIdentity) : void {
        serializeIdentity(writer, teamworkTagIdentity)
}
