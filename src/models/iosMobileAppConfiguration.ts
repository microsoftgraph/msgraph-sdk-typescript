import {AppConfigurationSettingItem} from './appConfigurationSettingItem';
import {ManagedDeviceMobileAppConfiguration} from './managedDeviceMobileAppConfiguration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosMobileAppConfiguration extends Partial<AdditionalDataHolder>, ManagedDeviceMobileAppConfiguration, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** mdm app configuration Base64 binary. */
    encodedSettingXml?: string | undefined;
    /** app configuration setting items. */
    settings?: AppConfigurationSettingItem[] | undefined;
}
