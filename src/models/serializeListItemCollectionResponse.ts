import { type ListItem } from './listItem';
import { type ListItemCollectionResponse } from './listItemCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeListItem } from './serializeListItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeListItemCollectionResponse(writer: SerializationWriter, listItemCollectionResponse: ListItemCollectionResponse | undefined = {} as ListItemCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, listItemCollectionResponse)
        writer.writeCollectionOfObjectValues<ListItem>("value", listItemCollectionResponse.value, serializeListItem);
}
