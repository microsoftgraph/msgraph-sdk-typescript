import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import type {TeamworkApplicationIdentity} from './teamworkApplicationIdentity';
import {TeamworkApplicationIdentityType} from './teamworkApplicationIdentityType';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkApplicationIdentity(teamworkApplicationIdentity: TeamworkApplicationIdentity | undefined = {} as TeamworkApplicationIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(teamworkApplicationIdentity),
        "applicationIdentityType": n => { teamworkApplicationIdentity.applicationIdentityType = n.getEnumValue<TeamworkApplicationIdentityType>(TeamworkApplicationIdentityType); },
    }
}
