import {AssociatedTeamInfo} from './associatedTeamInfo';
import {serializeTeamInfo} from './serializeTeamInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssociatedTeamInfo(associatedTeamInfo: AssociatedTeamInfo | undefined = {} as AssociatedTeamInfo, writer: SerializationWriter) : void {
        serializeTeamInfo(writer, associatedTeamInfo)
}
