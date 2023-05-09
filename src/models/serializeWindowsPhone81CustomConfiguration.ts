import {OmaSetting} from './omaSetting';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {serializeOmaSetting} from './serializeOmaSetting';
import {WindowsPhone81CustomConfiguration} from './windowsPhone81CustomConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsPhone81CustomConfiguration(writer: SerializationWriter, windowsPhone81CustomConfiguration: WindowsPhone81CustomConfiguration | undefined = {} as WindowsPhone81CustomConfiguration) : void {
        serializeDeviceConfiguration(writer, windowsPhone81CustomConfiguration)
        writer.writeCollectionOfObjectValues<OmaSetting>("omaSettings", windowsPhone81CustomConfiguration.omaSettings, serializeOmaSetting);
}
