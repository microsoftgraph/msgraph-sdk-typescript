import {AppConfigurationSettingItem} from './appConfigurationSettingItem';
import {IosMobileAppConfiguration} from './iosMobileAppConfiguration';
import {serializeAppConfigurationSettingItem} from './serializeAppConfigurationSettingItem';
import {serializeManagedDeviceMobileAppConfiguration} from './serializeManagedDeviceMobileAppConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosMobileAppConfiguration(writer: SerializationWriter, iosMobileAppConfiguration: IosMobileAppConfiguration | undefined = {} as IosMobileAppConfiguration) : void {
        serializeManagedDeviceMobileAppConfiguration(writer, iosMobileAppConfiguration)
        writer.writeStringValue("encodedSettingXml", iosMobileAppConfiguration.encodedSettingXml);
        writer.writeCollectionOfObjectValues<AppConfigurationSettingItem>("settings", iosMobileAppConfiguration.settings, serializeAppConfigurationSettingItem);
}
