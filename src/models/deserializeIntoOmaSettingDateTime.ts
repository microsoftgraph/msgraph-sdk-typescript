import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {OmaSettingDateTime} from './omaSettingDateTime';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingDateTime(omaSettingDateTime: OmaSettingDateTime | undefined = {} as OmaSettingDateTime) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOmaSetting(omaSettingDateTime),
        "value": n => { omaSettingDateTime.value = n.getDateValue(); },
    }
}
