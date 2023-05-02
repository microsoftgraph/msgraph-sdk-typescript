import {createPrintServiceFromDiscriminatorValue} from './createPrintServiceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PrintService} from './printService';
import {PrintServiceCollectionResponse} from './printServiceCollectionResponse';
import {serializePrintService} from './serializePrintService';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintServiceCollectionResponse(printServiceCollectionResponse: PrintServiceCollectionResponse | undefined = {} as PrintServiceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printServiceCollectionResponse),
        "value": n => { printServiceCollectionResponse.value = n.getCollectionOfObjectValues<PrintService>(createPrintServiceFromDiscriminatorValue); },
    }
}
