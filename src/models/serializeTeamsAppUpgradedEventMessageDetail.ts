import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamsAppUpgradedEventMessageDetail} from './teamsAppUpgradedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppUpgradedEventMessageDetail(writer: SerializationWriter, teamsAppUpgradedEventMessageDetail: TeamsAppUpgradedEventMessageDetail | undefined = {} as TeamsAppUpgradedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, teamsAppUpgradedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", teamsAppUpgradedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeStringValue("teamsAppDisplayName", teamsAppUpgradedEventMessageDetail.teamsAppDisplayName);
        writer.writeStringValue("teamsAppId", teamsAppUpgradedEventMessageDetail.teamsAppId);
}
