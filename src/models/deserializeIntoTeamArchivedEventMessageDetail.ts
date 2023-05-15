import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamArchivedEventMessageDetail} from './teamArchivedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamArchivedEventMessageDetail(teamArchivedEventMessageDetail: TeamArchivedEventMessageDetail | undefined = {} as TeamArchivedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamArchivedEventMessageDetail),
        "initiator": n => { teamArchivedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamId": n => { teamArchivedEventMessageDetail.teamId = n.getStringValue(); },
    }
}
