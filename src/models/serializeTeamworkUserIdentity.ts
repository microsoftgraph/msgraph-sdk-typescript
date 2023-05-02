import {serializeIdentity} from './serializeIdentity';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {TeamworkUserIdentityType} from './teamworkUserIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkUserIdentity(writer: SerializationWriter, teamworkUserIdentity: TeamworkUserIdentity | undefined = {} as TeamworkUserIdentity) : void {
        serializeIdentity(writer, teamworkUserIdentity)
        writer.writeEnumValue<TeamworkUserIdentityType>("userIdentityType", teamworkUserIdentity.userIdentityType);
}
