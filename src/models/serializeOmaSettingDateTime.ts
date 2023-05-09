import {OmaSettingDateTime} from './omaSettingDateTime';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOmaSettingDateTime(writer: SerializationWriter, omaSettingDateTime: OmaSettingDateTime | undefined = {} as OmaSettingDateTime) : void {
        serializeOmaSetting(writer, omaSettingDateTime)
        writer.writeDateValue("value", omaSettingDateTime.value);
}
