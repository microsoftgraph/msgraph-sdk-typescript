import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {StringCollectionResponse} from './stringCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStringCollectionResponse(writer: SerializationWriter, stringCollectionResponse: StringCollectionResponse | undefined = {} as StringCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, stringCollectionResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", stringCollectionResponse.value);
}
