import type {DeletedTeam} from './deletedTeam';
import type {DeletedTeamCollectionResponse} from './deletedTeamCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeletedTeam} from './serializeDeletedTeam';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeletedTeamCollectionResponse(writer: SerializationWriter, deletedTeamCollectionResponse: DeletedTeamCollectionResponse | undefined = {} as DeletedTeamCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deletedTeamCollectionResponse)
        writer.writeCollectionOfObjectValues<DeletedTeam>("value", deletedTeamCollectionResponse.value, serializeDeletedTeam);
}
