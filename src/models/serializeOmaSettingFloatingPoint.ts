import {OmaSettingFloatingPoint} from './omaSettingFloatingPoint';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOmaSettingFloatingPoint(writer: SerializationWriter, omaSettingFloatingPoint: OmaSettingFloatingPoint | undefined = {} as OmaSettingFloatingPoint) : void {
        serializeOmaSetting(writer, omaSettingFloatingPoint)
        writer.writeNumberValue("value", omaSettingFloatingPoint.value);
}
