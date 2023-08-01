import {createPrintConnectorFromDiscriminatorValue} from './createPrintConnectorFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {PrintConnector} from './printConnector';
import type {PrintConnectorCollectionResponse} from './printConnectorCollectionResponse';
import {serializePrintConnector} from './serializePrintConnector';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintConnectorCollectionResponse(printConnectorCollectionResponse: PrintConnectorCollectionResponse | undefined = {} as PrintConnectorCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printConnectorCollectionResponse),
        "value": n => { printConnectorCollectionResponse.value = n.getCollectionOfObjectValues<PrintConnector>(createPrintConnectorFromDiscriminatorValue); },
    }
}
