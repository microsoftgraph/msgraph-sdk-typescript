import {MacOSCustomConfiguration} from './macOSCustomConfiguration';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSCustomConfiguration(writer: SerializationWriter, macOSCustomConfiguration: MacOSCustomConfiguration | undefined = {} as MacOSCustomConfiguration) : void {
        serializeDeviceConfiguration(writer, macOSCustomConfiguration)
        writer.writeStringValue("payload", macOSCustomConfiguration.payload);
        writer.writeStringValue("payloadFileName", macOSCustomConfiguration.payloadFileName);
        writer.writeStringValue("payloadName", macOSCustomConfiguration.payloadName);
}
