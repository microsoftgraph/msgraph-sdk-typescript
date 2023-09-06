import { type OmaSettingStringXml } from './omaSettingStringXml';
import { serializeOmaSetting } from './serializeOmaSetting';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOmaSettingStringXml(writer: SerializationWriter, omaSettingStringXml: OmaSettingStringXml | undefined = {} as OmaSettingStringXml) : void {
        serializeOmaSetting(writer, omaSettingStringXml)
        writer.writeStringValue("fileName", omaSettingStringXml.fileName);
        writer.writeStringValue("value", omaSettingStringXml.value);
}
