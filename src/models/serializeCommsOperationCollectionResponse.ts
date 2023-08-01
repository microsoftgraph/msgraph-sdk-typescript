import type {CommsOperation} from './commsOperation';
import type {CommsOperationCollectionResponse} from './commsOperationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCommsOperationCollectionResponse(writer: SerializationWriter, commsOperationCollectionResponse: CommsOperationCollectionResponse | undefined = {} as CommsOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, commsOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<CommsOperation>("value", commsOperationCollectionResponse.value, serializeCommsOperation);
}
