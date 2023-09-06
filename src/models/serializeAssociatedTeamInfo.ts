import { type AssociatedTeamInfo } from './associatedTeamInfo';
import { serializeTeamInfo } from './serializeTeamInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAssociatedTeamInfo(writer: SerializationWriter, associatedTeamInfo: AssociatedTeamInfo | undefined = {} as AssociatedTeamInfo) : void {
        serializeTeamInfo(writer, associatedTeamInfo)
}
