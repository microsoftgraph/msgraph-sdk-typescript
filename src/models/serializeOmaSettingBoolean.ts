import {OmaSettingBoolean} from './omaSettingBoolean';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOmaSettingBoolean(writer: SerializationWriter, omaSettingBoolean: OmaSettingBoolean | undefined = {} as OmaSettingBoolean) : void {
        serializeOmaSetting(writer, omaSettingBoolean)
        writer.writeBooleanValue("value", omaSettingBoolean.value);
}
