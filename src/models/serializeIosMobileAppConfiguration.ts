import { type AppConfigurationSettingItem } from './appConfigurationSettingItem';
import { type IosMobileAppConfiguration } from './iosMobileAppConfiguration';
import { serializeAppConfigurationSettingItem } from './serializeAppConfigurationSettingItem';
import { serializeManagedDeviceMobileAppConfiguration } from './serializeManagedDeviceMobileAppConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosMobileAppConfiguration(writer: SerializationWriter, iosMobileAppConfiguration: IosMobileAppConfiguration | undefined = {} as IosMobileAppConfiguration) : void {
        serializeManagedDeviceMobileAppConfiguration(writer, iosMobileAppConfiguration)
        writer.writeStringValue("encodedSettingXml", iosMobileAppConfiguration.encodedSettingXml);
        writer.writeCollectionOfObjectValues<AppConfigurationSettingItem>("settings", iosMobileAppConfiguration.settings, serializeAppConfigurationSettingItem);
}
