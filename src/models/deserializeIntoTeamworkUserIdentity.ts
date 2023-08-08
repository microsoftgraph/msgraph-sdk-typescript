import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import type {TeamworkUserIdentity} from './teamworkUserIdentity';
import {TeamworkUserIdentityType} from './teamworkUserIdentityType';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkUserIdentity(teamworkUserIdentity: TeamworkUserIdentity | undefined = {} as TeamworkUserIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(teamworkUserIdentity),
        "userIdentityType": n => { teamworkUserIdentity.userIdentityType = n.getEnumValue<TeamworkUserIdentityType>(TeamworkUserIdentityType); },
    }
}
