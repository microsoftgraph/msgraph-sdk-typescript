import {OmaSettingStringXml} from './omaSettingStringXml';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOmaSettingStringXml(writer: SerializationWriter, omaSettingStringXml: OmaSettingStringXml | undefined = {} as OmaSettingStringXml) : void {
        serializeOmaSetting(writer, omaSettingStringXml)
        writer.writeStringValue("fileName", omaSettingStringXml.fileName);
        writer.writeStringValue("value", omaSettingStringXml.value);
}
