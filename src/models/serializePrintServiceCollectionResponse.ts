import {PrintService} from './printService';
import {PrintServiceCollectionResponse} from './printServiceCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintService} from './serializePrintService';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintServiceCollectionResponse(writer: SerializationWriter, printServiceCollectionResponse: PrintServiceCollectionResponse | undefined = {} as PrintServiceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printServiceCollectionResponse)
        writer.writeCollectionOfObjectValues<PrintService>("value", printServiceCollectionResponse.value, serializePrintService);
}
