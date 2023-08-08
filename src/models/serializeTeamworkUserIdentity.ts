import {serializeIdentity} from './serializeIdentity';
import type {TeamworkUserIdentity} from './teamworkUserIdentity';
import {TeamworkUserIdentityType} from './teamworkUserIdentityType';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkUserIdentity(writer: SerializationWriter, teamworkUserIdentity: TeamworkUserIdentity | undefined = {} as TeamworkUserIdentity) : void {
        serializeIdentity(writer, teamworkUserIdentity)
        writer.writeEnumValue<TeamworkUserIdentityType>("userIdentityType", teamworkUserIdentity.userIdentityType);
}
