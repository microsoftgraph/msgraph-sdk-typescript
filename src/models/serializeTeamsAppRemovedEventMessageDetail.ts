import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamsAppRemovedEventMessageDetail} from './teamsAppRemovedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppRemovedEventMessageDetail(writer: SerializationWriter, teamsAppRemovedEventMessageDetail: TeamsAppRemovedEventMessageDetail | undefined = {} as TeamsAppRemovedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, teamsAppRemovedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", teamsAppRemovedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeStringValue("teamsAppDisplayName", teamsAppRemovedEventMessageDetail.teamsAppDisplayName);
        writer.writeStringValue("teamsAppId", teamsAppRemovedEventMessageDetail.teamsAppId);
}
