import {AppConfigurationSettingItem} from './appConfigurationSettingItem';
import {createAppConfigurationSettingItemFromDiscriminatorValue} from './createAppConfigurationSettingItemFromDiscriminatorValue';
import {deserializeIntoManagedDeviceMobileAppConfiguration} from './deserializeIntoManagedDeviceMobileAppConfiguration';
import {IosMobileAppConfiguration} from './iosMobileAppConfiguration';
import {serializeAppConfigurationSettingItem} from './serializeAppConfigurationSettingItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosMobileAppConfiguration(iosMobileAppConfiguration: IosMobileAppConfiguration | undefined = {} as IosMobileAppConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedDeviceMobileAppConfiguration(iosMobileAppConfiguration),
        "encodedSettingXml": n => { iosMobileAppConfiguration.encodedSettingXml = n.getStringValue(); },
        "settings": n => { iosMobileAppConfiguration.settings = n.getCollectionOfObjectValues<AppConfigurationSettingItem>(createAppConfigurationSettingItemFromDiscriminatorValue); },
    }
}
