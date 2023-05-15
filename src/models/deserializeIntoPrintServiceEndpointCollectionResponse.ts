import {createPrintServiceEndpointFromDiscriminatorValue} from './createPrintServiceEndpointFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PrintServiceEndpoint} from './printServiceEndpoint';
import {PrintServiceEndpointCollectionResponse} from './printServiceEndpointCollectionResponse';
import {serializePrintServiceEndpoint} from './serializePrintServiceEndpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintServiceEndpointCollectionResponse(printServiceEndpointCollectionResponse: PrintServiceEndpointCollectionResponse | undefined = {} as PrintServiceEndpointCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printServiceEndpointCollectionResponse),
        "value": n => { printServiceEndpointCollectionResponse.value = n.getCollectionOfObjectValues<PrintServiceEndpoint>(createPrintServiceEndpointFromDiscriminatorValue); },
    }
}
