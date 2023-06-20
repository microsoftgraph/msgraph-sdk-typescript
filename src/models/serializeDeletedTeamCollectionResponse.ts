import {DeletedTeam} from './deletedTeam';
import {DeletedTeamCollectionResponse} from './deletedTeamCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeletedTeam} from './serializeDeletedTeam';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeletedTeamCollectionResponse(deletedTeamCollectionResponse: DeletedTeamCollectionResponse | undefined = {} as DeletedTeamCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deletedTeamCollectionResponse)
        writer.writeCollectionOfObjectValues<DeletedTeam>("value", deletedTeamCollectionResponse.value, serializeDeletedTeam);
}
