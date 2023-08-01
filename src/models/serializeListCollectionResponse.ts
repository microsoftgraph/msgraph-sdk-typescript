import type {List} from './list';
import type {ListCollectionResponse} from './listCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeList} from './serializeList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeListCollectionResponse(writer: SerializationWriter, listCollectionResponse: ListCollectionResponse | undefined = {} as ListCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, listCollectionResponse)
        writer.writeCollectionOfObjectValues<List>("value", listCollectionResponse.value, serializeList);
}
