import { serializeMobileApp } from './serializeMobileApp';
import { type WindowsWebApp } from './windowsWebApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsWebApp(writer: SerializationWriter, windowsWebApp: WindowsWebApp | undefined = {} as WindowsWebApp) : void {
        serializeMobileApp(writer, windowsWebApp)
        writer.writeStringValue("appUrl", windowsWebApp.appUrl);
}
