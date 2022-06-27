import {AppleDeviceFeaturesConfigurationBase} from './appleDeviceFeaturesConfigurationBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSDeviceFeaturesConfiguration extends Partial<AdditionalDataHolder>, AppleDeviceFeaturesConfigurationBase, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
