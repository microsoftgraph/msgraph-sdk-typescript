import { type OmaSettingDateTime } from './omaSettingDateTime';
import { serializeOmaSetting } from './serializeOmaSetting';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOmaSettingDateTime(writer: SerializationWriter, omaSettingDateTime: OmaSettingDateTime | undefined = {} as OmaSettingDateTime) : void {
        serializeOmaSetting(writer, omaSettingDateTime)
        writer.writeDateValue("value", omaSettingDateTime.value);
}
