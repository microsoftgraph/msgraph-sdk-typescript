import { createPrintServiceEndpointFromDiscriminatorValue } from './createPrintServiceEndpointFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type PrintService } from './printService';
import { type PrintServiceEndpoint } from './printServiceEndpoint';
import { serializePrintServiceEndpoint } from './serializePrintServiceEndpoint';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintService(printService: PrintService | undefined = {} as PrintService) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printService),
        "endpoints": n => { printService.endpoints = n.getCollectionOfObjectValues<PrintServiceEndpoint>(createPrintServiceEndpointFromDiscriminatorValue); },
    }
}
