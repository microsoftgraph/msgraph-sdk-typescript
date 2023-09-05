import { deserializeIntoAppleDeviceFeaturesConfigurationBase } from './deserializeIntoAppleDeviceFeaturesConfigurationBase';
import { type MacOSDeviceFeaturesConfiguration } from './macOSDeviceFeaturesConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSDeviceFeaturesConfiguration(macOSDeviceFeaturesConfiguration: MacOSDeviceFeaturesConfiguration | undefined = {} as MacOSDeviceFeaturesConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAppleDeviceFeaturesConfigurationBase(macOSDeviceFeaturesConfiguration),
    }
}
