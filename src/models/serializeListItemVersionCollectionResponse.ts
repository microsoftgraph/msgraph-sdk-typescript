import type {ListItemVersion} from './listItemVersion';
import type {ListItemVersionCollectionResponse} from './listItemVersionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeListItemVersion} from './serializeListItemVersion';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeListItemVersionCollectionResponse(writer: SerializationWriter, listItemVersionCollectionResponse: ListItemVersionCollectionResponse | undefined = {} as ListItemVersionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, listItemVersionCollectionResponse)
        writer.writeCollectionOfObjectValues<ListItemVersion>("value", listItemVersionCollectionResponse.value, serializeListItemVersion);
}
