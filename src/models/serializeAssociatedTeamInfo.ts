import {AssociatedTeamInfo} from './associatedTeamInfo';
import {serializeTeamInfo} from './serializeTeamInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssociatedTeamInfo(writer: SerializationWriter, associatedTeamInfo: AssociatedTeamInfo | undefined = {} as AssociatedTeamInfo) : void {
        serializeTeamInfo(writer, associatedTeamInfo)
}
