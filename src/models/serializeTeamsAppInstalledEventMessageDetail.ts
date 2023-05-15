import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamsAppInstalledEventMessageDetail} from './teamsAppInstalledEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppInstalledEventMessageDetail(writer: SerializationWriter, teamsAppInstalledEventMessageDetail: TeamsAppInstalledEventMessageDetail | undefined = {} as TeamsAppInstalledEventMessageDetail) : void {
        serializeEventMessageDetail(writer, teamsAppInstalledEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", teamsAppInstalledEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeStringValue("teamsAppDisplayName", teamsAppInstalledEventMessageDetail.teamsAppDisplayName);
        writer.writeStringValue("teamsAppId", teamsAppInstalledEventMessageDetail.teamsAppId);
}
