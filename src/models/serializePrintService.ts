import { type PrintService } from './printService';
import { type PrintServiceEndpoint } from './printServiceEndpoint';
import { serializeEntity } from './serializeEntity';
import { serializePrintServiceEndpoint } from './serializePrintServiceEndpoint';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrintService(writer: SerializationWriter, printService: PrintService | undefined = {} as PrintService) : void {
        serializeEntity(writer, printService)
        writer.writeCollectionOfObjectValues<PrintServiceEndpoint>("endpoints", printService.endpoints, serializePrintServiceEndpoint);
}
