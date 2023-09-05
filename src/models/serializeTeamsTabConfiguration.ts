import { type TeamsTabConfiguration } from './teamsTabConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamsTabConfiguration(writer: SerializationWriter, teamsTabConfiguration: TeamsTabConfiguration | undefined = {} as TeamsTabConfiguration) : void {
        writer.writeStringValue("contentUrl", teamsTabConfiguration.contentUrl);
        writer.writeStringValue("entityId", teamsTabConfiguration.entityId);
        writer.writeStringValue("@odata.type", teamsTabConfiguration.odataType);
        writer.writeStringValue("removeUrl", teamsTabConfiguration.removeUrl);
        writer.writeStringValue("websiteUrl", teamsTabConfiguration.websiteUrl);
        writer.writeAdditionalData(teamsTabConfiguration.additionalData);
}
