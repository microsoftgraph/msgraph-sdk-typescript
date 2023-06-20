import {CommsOperation} from './commsOperation';
import {CommsOperationCollectionResponse} from './commsOperationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCommsOperationCollectionResponse(commsOperationCollectionResponse: CommsOperationCollectionResponse | undefined = {} as CommsOperationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, commsOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<CommsOperation>("value", commsOperationCollectionResponse.value, serializeCommsOperation);
}
