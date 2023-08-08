import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import type {OmaSettingFloatingPoint} from './omaSettingFloatingPoint';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingFloatingPoint(omaSettingFloatingPoint: OmaSettingFloatingPoint | undefined = {} as OmaSettingFloatingPoint) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOmaSetting(omaSettingFloatingPoint),
        "value": n => { omaSettingFloatingPoint.value = n.getNumberValue(); },
    }
}
