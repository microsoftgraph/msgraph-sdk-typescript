import { serializeEntity } from './serializeEntity';
import { serializeTeamsApp } from './serializeTeamsApp';
import { serializeTeamsTabConfiguration } from './serializeTeamsTabConfiguration';
import { type TeamsApp } from './teamsApp';
import { type TeamsTab } from './teamsTab';
import { type TeamsTabConfiguration } from './teamsTabConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamsTab(writer: SerializationWriter, teamsTab: TeamsTab | undefined = {} as TeamsTab) : void {
        serializeEntity(writer, teamsTab)
        writer.writeObjectValue<TeamsTabConfiguration>("configuration", teamsTab.configuration, serializeTeamsTabConfiguration);
        writer.writeStringValue("displayName", teamsTab.displayName);
        writer.writeObjectValue<TeamsApp>("teamsApp", teamsTab.teamsApp, serializeTeamsApp);
        writer.writeStringValue("webUrl", teamsTab.webUrl);
}
