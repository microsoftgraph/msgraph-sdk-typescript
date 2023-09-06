import { type OmaSettingString } from './omaSettingString';
import { serializeOmaSetting } from './serializeOmaSetting';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOmaSettingString(writer: SerializationWriter, omaSettingString: OmaSettingString | undefined = {} as OmaSettingString) : void {
        serializeOmaSetting(writer, omaSettingString)
        writer.writeStringValue("value", omaSettingString.value);
}
