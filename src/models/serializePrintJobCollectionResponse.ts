import {PrintJob} from './printJob';
import {PrintJobCollectionResponse} from './printJobCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintJob} from './serializePrintJob';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintJobCollectionResponse(writer: SerializationWriter, printJobCollectionResponse: PrintJobCollectionResponse | undefined = {} as PrintJobCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printJobCollectionResponse)
        writer.writeCollectionOfObjectValues<PrintJob>("value", printJobCollectionResponse.value, serializePrintJob);
}
