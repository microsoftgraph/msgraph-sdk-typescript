import { type AppConfigurationSettingItem } from './appConfigurationSettingItem';
import { createAppConfigurationSettingItemFromDiscriminatorValue } from './createAppConfigurationSettingItemFromDiscriminatorValue';
import { deserializeIntoManagedDeviceMobileAppConfiguration } from './deserializeIntoManagedDeviceMobileAppConfiguration';
import { type IosMobileAppConfiguration } from './iosMobileAppConfiguration';
import { serializeAppConfigurationSettingItem } from './serializeAppConfigurationSettingItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosMobileAppConfiguration(iosMobileAppConfiguration: IosMobileAppConfiguration | undefined = {} as IosMobileAppConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedDeviceMobileAppConfiguration(iosMobileAppConfiguration),
        "encodedSettingXml": n => { iosMobileAppConfiguration.encodedSettingXml = n.getStringValue(); },
        "settings": n => { iosMobileAppConfiguration.settings = n.getCollectionOfObjectValues<AppConfigurationSettingItem>(createAppConfigurationSettingItemFromDiscriminatorValue); },
    }
}
