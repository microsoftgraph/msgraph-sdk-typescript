import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamsAppUpgradedEventMessageDetail} from './teamsAppUpgradedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppUpgradedEventMessageDetail(teamsAppUpgradedEventMessageDetail: TeamsAppUpgradedEventMessageDetail | undefined = {} as TeamsAppUpgradedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamsAppUpgradedEventMessageDetail),
        "initiator": n => { teamsAppUpgradedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamsAppDisplayName": n => { teamsAppUpgradedEventMessageDetail.teamsAppDisplayName = n.getStringValue(); },
        "teamsAppId": n => { teamsAppUpgradedEventMessageDetail.teamsAppId = n.getStringValue(); },
    }
}
