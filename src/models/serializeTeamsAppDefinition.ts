import {IdentitySet} from './identitySet';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamsAppAuthorization} from './serializeTeamsAppAuthorization';
import {serializeTeamworkBot} from './serializeTeamworkBot';
import {TeamsAppAuthorization} from './teamsAppAuthorization';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppPublishingState} from './teamsAppPublishingState';
import {TeamworkBot} from './teamworkBot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppDefinition(writer: SerializationWriter, teamsAppDefinition: TeamsAppDefinition | undefined = {} as TeamsAppDefinition) : void {
        serializeEntity(writer, teamsAppDefinition)
        writer.writeObjectValue<TeamsAppAuthorization>("authorization", teamsAppDefinition.authorization, serializeTeamsAppAuthorization);
        writer.writeObjectValue<TeamworkBot>("bot", teamsAppDefinition.bot, serializeTeamworkBot);
        writer.writeObjectValue<IdentitySet>("createdBy", teamsAppDefinition.createdBy, serializeIdentitySet);
        writer.writeStringValue("description", teamsAppDefinition.description);
        writer.writeStringValue("displayName", teamsAppDefinition.displayName);
        writer.writeDateValue("lastModifiedDateTime", teamsAppDefinition.lastModifiedDateTime);
        writer.writeEnumValue<TeamsAppPublishingState>("publishingState", teamsAppDefinition.publishingState);
        writer.writeStringValue("shortDescription", teamsAppDefinition.shortDescription);
        writer.writeStringValue("teamsAppId", teamsAppDefinition.teamsAppId);
        writer.writeStringValue("version", teamsAppDefinition.version);
}
