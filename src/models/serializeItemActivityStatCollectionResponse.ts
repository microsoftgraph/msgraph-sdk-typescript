import {ItemActivityStat} from './itemActivityStat';
import {ItemActivityStatCollectionResponse} from './itemActivityStatCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeItemActivityStat} from './serializeItemActivityStat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemActivityStatCollectionResponse(itemActivityStatCollectionResponse: ItemActivityStatCollectionResponse | undefined = {} as ItemActivityStatCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, itemActivityStatCollectionResponse)
        writer.writeCollectionOfObjectValues<ItemActivityStat>("value", itemActivityStatCollectionResponse.value, serializeItemActivityStat);
}
