import {DeviceConfiguration} from './deviceConfiguration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10EnterpriseModernAppManagementConfiguration extends Partial<AdditionalDataHolder>, DeviceConfiguration, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether or not to uninstall a fixed list of built-in Windows apps. */
    uninstallBuiltInApps?: boolean | undefined;
}
