import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamsAppInstalledEventMessageDetail} from './teamsAppInstalledEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppInstalledEventMessageDetail(teamsAppInstalledEventMessageDetail: TeamsAppInstalledEventMessageDetail | undefined = {} as TeamsAppInstalledEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamsAppInstalledEventMessageDetail),
        "initiator": n => { teamsAppInstalledEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamsAppDisplayName": n => { teamsAppInstalledEventMessageDetail.teamsAppDisplayName = n.getStringValue(); },
        "teamsAppId": n => { teamsAppInstalledEventMessageDetail.teamsAppId = n.getStringValue(); },
    }
}
