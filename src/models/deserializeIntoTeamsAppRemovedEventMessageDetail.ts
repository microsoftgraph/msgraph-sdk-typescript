import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamsAppRemovedEventMessageDetail} from './teamsAppRemovedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppRemovedEventMessageDetail(teamsAppRemovedEventMessageDetail: TeamsAppRemovedEventMessageDetail | undefined = {} as TeamsAppRemovedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamsAppRemovedEventMessageDetail),
        "initiator": n => { teamsAppRemovedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamsAppDisplayName": n => { teamsAppRemovedEventMessageDetail.teamsAppDisplayName = n.getStringValue(); },
        "teamsAppId": n => { teamsAppRemovedEventMessageDetail.teamsAppId = n.getStringValue(); },
    }
}
