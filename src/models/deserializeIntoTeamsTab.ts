import { createTeamsAppFromDiscriminatorValue } from './createTeamsAppFromDiscriminatorValue';
import { createTeamsTabConfigurationFromDiscriminatorValue } from './createTeamsTabConfigurationFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeTeamsApp } from './serializeTeamsApp';
import { serializeTeamsTabConfiguration } from './serializeTeamsTabConfiguration';
import { type TeamsApp } from './teamsApp';
import { type TeamsTab } from './teamsTab';
import { type TeamsTabConfiguration } from './teamsTabConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsTab(teamsTab: TeamsTab | undefined = {} as TeamsTab) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsTab),
        "configuration": n => { teamsTab.configuration = n.getObjectValue<TeamsTabConfiguration>(createTeamsTabConfigurationFromDiscriminatorValue); },
        "displayName": n => { teamsTab.displayName = n.getStringValue(); },
        "teamsApp": n => { teamsTab.teamsApp = n.getObjectValue<TeamsApp>(createTeamsAppFromDiscriminatorValue); },
        "webUrl": n => { teamsTab.webUrl = n.getStringValue(); },
    }
}
