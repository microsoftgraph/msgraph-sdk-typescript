import { type MacOSCustomConfiguration } from './macOSCustomConfiguration';
import { serializeDeviceConfiguration } from './serializeDeviceConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMacOSCustomConfiguration(writer: SerializationWriter, macOSCustomConfiguration: MacOSCustomConfiguration | undefined = {} as MacOSCustomConfiguration) : void {
        serializeDeviceConfiguration(writer, macOSCustomConfiguration)
        writer.writeStringValue("payload", macOSCustomConfiguration.payload);
        writer.writeStringValue("payloadFileName", macOSCustomConfiguration.payloadFileName);
        writer.writeStringValue("payloadName", macOSCustomConfiguration.payloadName);
}
