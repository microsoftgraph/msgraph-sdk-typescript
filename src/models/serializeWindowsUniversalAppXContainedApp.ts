import {serializeMobileContainedApp} from './serializeMobileContainedApp';
import type {WindowsUniversalAppXContainedApp} from './windowsUniversalAppXContainedApp';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsUniversalAppXContainedApp(writer: SerializationWriter, windowsUniversalAppXContainedApp: WindowsUniversalAppXContainedApp | undefined = {} as WindowsUniversalAppXContainedApp) : void {
        serializeMobileContainedApp(writer, windowsUniversalAppXContainedApp)
        writer.writeStringValue("appUserModelId", windowsUniversalAppXContainedApp.appUserModelId);
}
