import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEventMessageDetail } from './deserializeIntoEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type TeamUnarchivedEventMessageDetail } from './teamUnarchivedEventMessageDetail';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamUnarchivedEventMessageDetail(teamUnarchivedEventMessageDetail: TeamUnarchivedEventMessageDetail | undefined = {} as TeamUnarchivedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamUnarchivedEventMessageDetail),
        "initiator": n => { teamUnarchivedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamId": n => { teamUnarchivedEventMessageDetail.teamId = n.getStringValue(); },
    }
}
