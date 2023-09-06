import { type OmaSettingInteger } from './omaSettingInteger';
import { serializeOmaSetting } from './serializeOmaSetting';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOmaSettingInteger(writer: SerializationWriter, omaSettingInteger: OmaSettingInteger | undefined = {} as OmaSettingInteger) : void {
        serializeOmaSetting(writer, omaSettingInteger)
        writer.writeNumberValue("value", omaSettingInteger.value);
}
