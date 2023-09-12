import { type PrintServiceEndpoint } from './printServiceEndpoint';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrintServiceEndpoint(writer: SerializationWriter, printServiceEndpoint: PrintServiceEndpoint | undefined = {} as PrintServiceEndpoint) : void {
        serializeEntity(writer, printServiceEndpoint)
        writer.writeStringValue("displayName", printServiceEndpoint.displayName);
        writer.writeStringValue("uri", printServiceEndpoint.uri);
}
