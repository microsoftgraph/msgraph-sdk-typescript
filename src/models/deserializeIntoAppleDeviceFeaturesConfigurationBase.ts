import { type AppleDeviceFeaturesConfigurationBase } from './appleDeviceFeaturesConfigurationBase';
import { deserializeIntoDeviceConfiguration } from './deserializeIntoDeviceConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAppleDeviceFeaturesConfigurationBase(appleDeviceFeaturesConfigurationBase: AppleDeviceFeaturesConfigurationBase | undefined = {} as AppleDeviceFeaturesConfigurationBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(appleDeviceFeaturesConfigurationBase),
    }
}
