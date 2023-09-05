import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEventMessageDetail } from './deserializeIntoEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type TeamArchivedEventMessageDetail } from './teamArchivedEventMessageDetail';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamArchivedEventMessageDetail(teamArchivedEventMessageDetail: TeamArchivedEventMessageDetail | undefined = {} as TeamArchivedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamArchivedEventMessageDetail),
        "initiator": n => { teamArchivedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamId": n => { teamArchivedEventMessageDetail.teamId = n.getStringValue(); },
    }
}
