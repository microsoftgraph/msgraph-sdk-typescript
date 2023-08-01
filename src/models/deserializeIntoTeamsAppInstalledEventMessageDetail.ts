import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import type {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import type {TeamsAppInstalledEventMessageDetail} from './teamsAppInstalledEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppInstalledEventMessageDetail(teamsAppInstalledEventMessageDetail: TeamsAppInstalledEventMessageDetail | undefined = {} as TeamsAppInstalledEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamsAppInstalledEventMessageDetail),
        "initiator": n => { teamsAppInstalledEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamsAppDisplayName": n => { teamsAppInstalledEventMessageDetail.teamsAppDisplayName = n.getStringValue(); },
        "teamsAppId": n => { teamsAppInstalledEventMessageDetail.teamsAppId = n.getStringValue(); },
    }
}
