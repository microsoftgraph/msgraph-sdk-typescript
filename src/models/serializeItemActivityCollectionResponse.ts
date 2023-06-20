import {ItemActivity} from './itemActivity';
import {ItemActivityCollectionResponse} from './itemActivityCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeItemActivity} from './serializeItemActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemActivityCollectionResponse(itemActivityCollectionResponse: ItemActivityCollectionResponse | undefined = {} as ItemActivityCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, itemActivityCollectionResponse)
        writer.writeCollectionOfObjectValues<ItemActivity>("value", itemActivityCollectionResponse.value, serializeItemActivity);
}
