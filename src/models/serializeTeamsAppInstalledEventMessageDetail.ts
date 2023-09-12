import { type IdentitySet } from './identitySet';
import { serializeEventMessageDetail } from './serializeEventMessageDetail';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type TeamsAppInstalledEventMessageDetail } from './teamsAppInstalledEventMessageDetail';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamsAppInstalledEventMessageDetail(writer: SerializationWriter, teamsAppInstalledEventMessageDetail: TeamsAppInstalledEventMessageDetail | undefined = {} as TeamsAppInstalledEventMessageDetail) : void {
        serializeEventMessageDetail(writer, teamsAppInstalledEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", teamsAppInstalledEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeStringValue("teamsAppDisplayName", teamsAppInstalledEventMessageDetail.teamsAppDisplayName);
        writer.writeStringValue("teamsAppId", teamsAppInstalledEventMessageDetail.teamsAppId);
}
