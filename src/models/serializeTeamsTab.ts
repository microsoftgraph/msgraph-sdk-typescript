import {serializeEntity} from './serializeEntity';
import {serializeTeamsApp} from './serializeTeamsApp';
import {serializeTeamsTabConfiguration} from './serializeTeamsTabConfiguration';
import {TeamsApp} from './teamsApp';
import {TeamsTab} from './teamsTab';
import {TeamsTabConfiguration} from './teamsTabConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsTab(writer: SerializationWriter, teamsTab: TeamsTab | undefined = {} as TeamsTab) : void {
        serializeEntity(writer, teamsTab)
        writer.writeObjectValue<TeamsTabConfiguration>("configuration", teamsTab.configuration, serializeTeamsTabConfiguration);
        writer.writeStringValue("displayName", teamsTab.displayName);
        writer.writeObjectValue<TeamsApp>("teamsApp", teamsTab.teamsApp, serializeTeamsApp);
        writer.writeStringValue("webUrl", teamsTab.webUrl);
}
