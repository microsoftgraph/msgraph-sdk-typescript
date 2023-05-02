import {OmaSettingString} from './omaSettingString';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOmaSettingString(writer: SerializationWriter, omaSettingString: OmaSettingString | undefined = {} as OmaSettingString) : void {
        serializeOmaSetting(writer, omaSettingString)
        writer.writeStringValue("value", omaSettingString.value);
}
