import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEventMessageDetail } from './deserializeIntoEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type TeamsAppUpgradedEventMessageDetail } from './teamsAppUpgradedEventMessageDetail';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppUpgradedEventMessageDetail(teamsAppUpgradedEventMessageDetail: TeamsAppUpgradedEventMessageDetail | undefined = {} as TeamsAppUpgradedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamsAppUpgradedEventMessageDetail),
        "initiator": n => { teamsAppUpgradedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamsAppDisplayName": n => { teamsAppUpgradedEventMessageDetail.teamsAppDisplayName = n.getStringValue(); },
        "teamsAppId": n => { teamsAppUpgradedEventMessageDetail.teamsAppId = n.getStringValue(); },
    }
}
