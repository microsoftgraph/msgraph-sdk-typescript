import {MacOSDeviceFeaturesConfiguration} from './macOSDeviceFeaturesConfiguration';
import {serializeAppleDeviceFeaturesConfigurationBase} from './serializeAppleDeviceFeaturesConfigurationBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSDeviceFeaturesConfiguration(writer: SerializationWriter, macOSDeviceFeaturesConfiguration: MacOSDeviceFeaturesConfiguration | undefined = {} as MacOSDeviceFeaturesConfiguration) : void {
        serializeAppleDeviceFeaturesConfigurationBase(writer, macOSDeviceFeaturesConfiguration)
}
