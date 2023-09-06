import { type TeamsTabConfiguration } from './teamsTabConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsTabConfiguration(teamsTabConfiguration: TeamsTabConfiguration | undefined = {} as TeamsTabConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "contentUrl": n => { teamsTabConfiguration.contentUrl = n.getStringValue(); },
        "entityId": n => { teamsTabConfiguration.entityId = n.getStringValue(); },
        "@odata.type": n => { teamsTabConfiguration.odataType = n.getStringValue(); },
        "removeUrl": n => { teamsTabConfiguration.removeUrl = n.getStringValue(); },
        "websiteUrl": n => { teamsTabConfiguration.websiteUrl = n.getStringValue(); },
    }
}
