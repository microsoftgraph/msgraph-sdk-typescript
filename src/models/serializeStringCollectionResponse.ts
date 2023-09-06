import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type StringCollectionResponse } from './stringCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeStringCollectionResponse(writer: SerializationWriter, stringCollectionResponse: StringCollectionResponse | undefined = {} as StringCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, stringCollectionResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", stringCollectionResponse.value);
}
