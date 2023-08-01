import type {AppConfigurationSettingItem} from './appConfigurationSettingItem';
import type {ManagedDeviceMobileAppConfiguration} from './managedDeviceMobileAppConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosMobileAppConfiguration extends ManagedDeviceMobileAppConfiguration, Parsable {
    /**
     * mdm app configuration Base64 binary.
     */
    encodedSettingXml?: string | undefined;
    /**
     * app configuration setting items.
     */
    settings?: AppConfigurationSettingItem[] | undefined;
}
