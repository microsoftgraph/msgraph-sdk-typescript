import {deserializeIntoAppleDeviceFeaturesConfigurationBase} from './deserializeIntoAppleDeviceFeaturesConfigurationBase';
import {MacOSDeviceFeaturesConfiguration} from './macOSDeviceFeaturesConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSDeviceFeaturesConfiguration(macOSDeviceFeaturesConfiguration: MacOSDeviceFeaturesConfiguration | undefined = {} as MacOSDeviceFeaturesConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAppleDeviceFeaturesConfigurationBase(macOSDeviceFeaturesConfiguration),
    }
}
