import { type OmaSetting } from './omaSetting';
import { serializeDeviceConfiguration } from './serializeDeviceConfiguration';
import { serializeOmaSetting } from './serializeOmaSetting';
import { type Windows10CustomConfiguration } from './windows10CustomConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindows10CustomConfiguration(writer: SerializationWriter, windows10CustomConfiguration: Windows10CustomConfiguration | undefined = {} as Windows10CustomConfiguration) : void {
        serializeDeviceConfiguration(writer, windows10CustomConfiguration)
        writer.writeCollectionOfObjectValues<OmaSetting>("omaSettings", windows10CustomConfiguration.omaSettings, serializeOmaSetting);
}
