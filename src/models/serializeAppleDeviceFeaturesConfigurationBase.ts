import {AppleDeviceFeaturesConfigurationBase} from './appleDeviceFeaturesConfigurationBase';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppleDeviceFeaturesConfigurationBase(appleDeviceFeaturesConfigurationBase: AppleDeviceFeaturesConfigurationBase | undefined = {} as AppleDeviceFeaturesConfigurationBase, writer: SerializationWriter) : void {
        serializeDeviceConfiguration(writer, appleDeviceFeaturesConfigurationBase)
}
