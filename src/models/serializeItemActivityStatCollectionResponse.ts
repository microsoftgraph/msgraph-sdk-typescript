import {ItemActivityStat} from './itemActivityStat';
import {ItemActivityStatCollectionResponse} from './itemActivityStatCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeItemActivityStat} from './serializeItemActivityStat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemActivityStatCollectionResponse(writer: SerializationWriter, itemActivityStatCollectionResponse: ItemActivityStatCollectionResponse | undefined = {} as ItemActivityStatCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, itemActivityStatCollectionResponse)
        writer.writeCollectionOfObjectValues<ItemActivityStat>("value", itemActivityStatCollectionResponse.value, serializeItemActivityStat);
}
