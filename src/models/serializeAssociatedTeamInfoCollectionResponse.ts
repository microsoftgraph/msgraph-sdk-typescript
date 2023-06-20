import {AssociatedTeamInfo} from './associatedTeamInfo';
import {AssociatedTeamInfoCollectionResponse} from './associatedTeamInfoCollectionResponse';
import {serializeAssociatedTeamInfo} from './serializeAssociatedTeamInfo';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssociatedTeamInfoCollectionResponse(associatedTeamInfoCollectionResponse: AssociatedTeamInfoCollectionResponse | undefined = {} as AssociatedTeamInfoCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, associatedTeamInfoCollectionResponse)
        writer.writeCollectionOfObjectValues<AssociatedTeamInfo>("value", associatedTeamInfoCollectionResponse.value, serializeAssociatedTeamInfo);
}
