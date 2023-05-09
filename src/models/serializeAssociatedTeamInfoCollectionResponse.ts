import {AssociatedTeamInfo} from './associatedTeamInfo';
import {AssociatedTeamInfoCollectionResponse} from './associatedTeamInfoCollectionResponse';
import {serializeAssociatedTeamInfo} from './serializeAssociatedTeamInfo';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssociatedTeamInfoCollectionResponse(writer: SerializationWriter, associatedTeamInfoCollectionResponse: AssociatedTeamInfoCollectionResponse | undefined = {} as AssociatedTeamInfoCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, associatedTeamInfoCollectionResponse)
        writer.writeCollectionOfObjectValues<AssociatedTeamInfo>("value", associatedTeamInfoCollectionResponse.value, serializeAssociatedTeamInfo);
}
