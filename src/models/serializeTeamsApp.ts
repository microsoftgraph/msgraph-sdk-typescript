import {serializeEntity} from './serializeEntity';
import {serializeTeamsAppDefinition} from './serializeTeamsAppDefinition';
import {TeamsApp} from './teamsApp';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppDistributionMethod} from './teamsAppDistributionMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsApp(writer: SerializationWriter, teamsApp: TeamsApp | undefined = {} as TeamsApp) : void {
        serializeEntity(writer, teamsApp)
        writer.writeCollectionOfObjectValues<TeamsAppDefinition>("appDefinitions", teamsApp.appDefinitions, serializeTeamsAppDefinition);
        writer.writeStringValue("displayName", teamsApp.displayName);
        writer.writeEnumValue<TeamsAppDistributionMethod>("distributionMethod", teamsApp.distributionMethod);
        writer.writeStringValue("externalId", teamsApp.externalId);
}
