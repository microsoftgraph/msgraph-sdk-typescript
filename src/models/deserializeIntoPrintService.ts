import {createPrintServiceEndpointFromDiscriminatorValue} from './createPrintServiceEndpointFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PrintService} from './printService';
import {PrintServiceEndpoint} from './printServiceEndpoint';
import {serializePrintServiceEndpoint} from './serializePrintServiceEndpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintService(printService: PrintService | undefined = {} as PrintService) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printService),
        "endpoints": n => { printService.endpoints = n.getCollectionOfObjectValues<PrintServiceEndpoint>(createPrintServiceEndpointFromDiscriminatorValue); },
    }
}
