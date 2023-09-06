import { type PrintTask } from './printTask';
import { type PrintTaskCollectionResponse } from './printTaskCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializePrintTask } from './serializePrintTask';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrintTaskCollectionResponse(writer: SerializationWriter, printTaskCollectionResponse: PrintTaskCollectionResponse | undefined = {} as PrintTaskCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printTaskCollectionResponse)
        writer.writeCollectionOfObjectValues<PrintTask>("value", printTaskCollectionResponse.value, serializePrintTask);
}
