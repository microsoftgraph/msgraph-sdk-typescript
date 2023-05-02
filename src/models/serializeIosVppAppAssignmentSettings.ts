import {IosVppAppAssignmentSettings} from './iosVppAppAssignmentSettings';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosVppAppAssignmentSettings(writer: SerializationWriter, iosVppAppAssignmentSettings: IosVppAppAssignmentSettings | undefined = {} as IosVppAppAssignmentSettings) : void {
        serializeMobileAppAssignmentSettings(writer, iosVppAppAssignmentSettings)
        writer.writeBooleanValue("useDeviceLicensing", iosVppAppAssignmentSettings.useDeviceLicensing);
        writer.writeStringValue("vpnConfigurationId", iosVppAppAssignmentSettings.vpnConfigurationId);
}
