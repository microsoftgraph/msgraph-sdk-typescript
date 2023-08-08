import type {AppleDeviceFeaturesConfigurationBase} from './appleDeviceFeaturesConfigurationBase';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppleDeviceFeaturesConfigurationBase(writer: SerializationWriter, appleDeviceFeaturesConfigurationBase: AppleDeviceFeaturesConfigurationBase | undefined = {} as AppleDeviceFeaturesConfigurationBase) : void {
        serializeDeviceConfiguration(writer, appleDeviceFeaturesConfigurationBase)
}
