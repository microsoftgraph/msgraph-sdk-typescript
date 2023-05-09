import {PrintOperation} from './printOperation';
import {PrintOperationCollectionResponse} from './printOperationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintOperation} from './serializePrintOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintOperationCollectionResponse(writer: SerializationWriter, printOperationCollectionResponse: PrintOperationCollectionResponse | undefined = {} as PrintOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<PrintOperation>("value", printOperationCollectionResponse.value, serializePrintOperation);
}
