import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamDescriptionUpdatedEventMessageDetail} from './teamDescriptionUpdatedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamDescriptionUpdatedEventMessageDetail(teamDescriptionUpdatedEventMessageDetail: TeamDescriptionUpdatedEventMessageDetail | undefined = {} as TeamDescriptionUpdatedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamDescriptionUpdatedEventMessageDetail),
        "initiator": n => { teamDescriptionUpdatedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamDescription": n => { teamDescriptionUpdatedEventMessageDetail.teamDescription = n.getStringValue(); },
        "teamId": n => { teamDescriptionUpdatedEventMessageDetail.teamId = n.getStringValue(); },
    }
}
