import type {AssociatedTeamInfo} from './associatedTeamInfo';
import {deserializeIntoTeamInfo} from './deserializeIntoTeamInfo';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssociatedTeamInfo(associatedTeamInfo: AssociatedTeamInfo | undefined = {} as AssociatedTeamInfo) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamInfo(associatedTeamInfo),
    }
}
