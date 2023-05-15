import {serializeMobileApp} from './serializeMobileApp';
import {WindowsWebApp} from './windowsWebApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsWebApp(writer: SerializationWriter, windowsWebApp: WindowsWebApp | undefined = {} as WindowsWebApp) : void {
        serializeMobileApp(writer, windowsWebApp)
        writer.writeStringValue("appUrl", windowsWebApp.appUrl);
}
