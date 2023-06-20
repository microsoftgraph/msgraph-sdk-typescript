import {List} from './list';
import {ListCollectionResponse} from './listCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeList} from './serializeList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeListCollectionResponse(listCollectionResponse: ListCollectionResponse | undefined = {} as ListCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, listCollectionResponse)
        writer.writeCollectionOfObjectValues<List>("value", listCollectionResponse.value, serializeList);
}
