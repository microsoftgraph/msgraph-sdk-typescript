import { type AssociatedTeamInfo } from './associatedTeamInfo';
import { type AssociatedTeamInfoCollectionResponse } from './associatedTeamInfoCollectionResponse';
import { serializeAssociatedTeamInfo } from './serializeAssociatedTeamInfo';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAssociatedTeamInfoCollectionResponse(writer: SerializationWriter, associatedTeamInfoCollectionResponse: AssociatedTeamInfoCollectionResponse | undefined = {} as AssociatedTeamInfoCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, associatedTeamInfoCollectionResponse)
        writer.writeCollectionOfObjectValues<AssociatedTeamInfo>("value", associatedTeamInfoCollectionResponse.value, serializeAssociatedTeamInfo);
}
