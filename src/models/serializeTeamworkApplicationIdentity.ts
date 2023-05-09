import {serializeIdentity} from './serializeIdentity';
import {TeamworkApplicationIdentity} from './teamworkApplicationIdentity';
import {TeamworkApplicationIdentityType} from './teamworkApplicationIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkApplicationIdentity(writer: SerializationWriter, teamworkApplicationIdentity: TeamworkApplicationIdentity | undefined = {} as TeamworkApplicationIdentity) : void {
        serializeIdentity(writer, teamworkApplicationIdentity)
        writer.writeEnumValue<TeamworkApplicationIdentityType>("applicationIdentityType", teamworkApplicationIdentity.applicationIdentityType);
}
