import { type MacOSDeviceFeaturesConfiguration } from './macOSDeviceFeaturesConfiguration';
import { serializeAppleDeviceFeaturesConfigurationBase } from './serializeAppleDeviceFeaturesConfigurationBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMacOSDeviceFeaturesConfiguration(writer: SerializationWriter, macOSDeviceFeaturesConfiguration: MacOSDeviceFeaturesConfiguration | undefined = {} as MacOSDeviceFeaturesConfiguration) : void {
        serializeAppleDeviceFeaturesConfigurationBase(writer, macOSDeviceFeaturesConfiguration)
}
