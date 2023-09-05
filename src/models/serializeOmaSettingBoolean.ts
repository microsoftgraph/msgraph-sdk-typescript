import { type OmaSettingBoolean } from './omaSettingBoolean';
import { serializeOmaSetting } from './serializeOmaSetting';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOmaSettingBoolean(writer: SerializationWriter, omaSettingBoolean: OmaSettingBoolean | undefined = {} as OmaSettingBoolean) : void {
        serializeOmaSetting(writer, omaSettingBoolean)
        writer.writeBooleanValue("value", omaSettingBoolean.value);
}
