import {ListItem} from './listItem';
import {ListItemCollectionResponse} from './listItemCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeListItem} from './serializeListItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeListItemCollectionResponse(listItemCollectionResponse: ListItemCollectionResponse | undefined = {} as ListItemCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, listItemCollectionResponse)
        writer.writeCollectionOfObjectValues<ListItem>("value", listItemCollectionResponse.value, serializeListItem);
}
