import {IosStoreAppAssignmentSettings} from './iosStoreAppAssignmentSettings';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosStoreAppAssignmentSettings(iosStoreAppAssignmentSettings: IosStoreAppAssignmentSettings | undefined = {} as IosStoreAppAssignmentSettings, writer: SerializationWriter) : void {
        serializeMobileAppAssignmentSettings(writer, iosStoreAppAssignmentSettings)
        writer.writeStringValue("vpnConfigurationId", iosStoreAppAssignmentSettings.vpnConfigurationId);
}
