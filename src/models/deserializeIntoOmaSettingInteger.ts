import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import type {OmaSettingInteger} from './omaSettingInteger';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingInteger(omaSettingInteger: OmaSettingInteger | undefined = {} as OmaSettingInteger) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOmaSetting(omaSettingInteger),
        "value": n => { omaSettingInteger.value = n.getNumberValue(); },
    }
}
