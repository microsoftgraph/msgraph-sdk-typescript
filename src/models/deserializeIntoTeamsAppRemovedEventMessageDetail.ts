import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEventMessageDetail } from './deserializeIntoEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type TeamsAppRemovedEventMessageDetail } from './teamsAppRemovedEventMessageDetail';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppRemovedEventMessageDetail(teamsAppRemovedEventMessageDetail: TeamsAppRemovedEventMessageDetail | undefined = {} as TeamsAppRemovedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamsAppRemovedEventMessageDetail),
        "initiator": n => { teamsAppRemovedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamsAppDisplayName": n => { teamsAppRemovedEventMessageDetail.teamsAppDisplayName = n.getStringValue(); },
        "teamsAppId": n => { teamsAppRemovedEventMessageDetail.teamsAppId = n.getStringValue(); },
    }
}
