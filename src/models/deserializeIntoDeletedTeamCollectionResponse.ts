import {createDeletedTeamFromDiscriminatorValue} from './createDeletedTeamFromDiscriminatorValue';
import {DeletedTeam} from './deletedTeam';
import {DeletedTeamCollectionResponse} from './deletedTeamCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeDeletedTeam} from './serializeDeletedTeam';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeletedTeamCollectionResponse(deletedTeamCollectionResponse: DeletedTeamCollectionResponse | undefined = {} as DeletedTeamCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deletedTeamCollectionResponse),
        "value": n => { deletedTeamCollectionResponse.value = n.getCollectionOfObjectValues<DeletedTeam>(createDeletedTeamFromDiscriminatorValue); },
    }
}
