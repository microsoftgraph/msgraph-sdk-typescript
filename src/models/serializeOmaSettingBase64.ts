import { type OmaSettingBase64 } from './omaSettingBase64';
import { serializeOmaSetting } from './serializeOmaSetting';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOmaSettingBase64(writer: SerializationWriter, omaSettingBase64: OmaSettingBase64 | undefined = {} as OmaSettingBase64) : void {
        serializeOmaSetting(writer, omaSettingBase64)
        writer.writeStringValue("fileName", omaSettingBase64.fileName);
        writer.writeStringValue("value", omaSettingBase64.value);
}
