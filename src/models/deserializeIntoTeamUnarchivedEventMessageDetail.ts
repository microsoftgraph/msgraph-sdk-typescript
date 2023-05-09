import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamUnarchivedEventMessageDetail} from './teamUnarchivedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamUnarchivedEventMessageDetail(teamUnarchivedEventMessageDetail: TeamUnarchivedEventMessageDetail | undefined = {} as TeamUnarchivedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamUnarchivedEventMessageDetail),
        "initiator": n => { teamUnarchivedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamId": n => { teamUnarchivedEventMessageDetail.teamId = n.getStringValue(); },
    }
}
