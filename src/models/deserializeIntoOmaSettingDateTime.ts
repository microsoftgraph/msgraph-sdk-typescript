import { deserializeIntoOmaSetting } from './deserializeIntoOmaSetting';
import { type OmaSettingDateTime } from './omaSettingDateTime';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingDateTime(omaSettingDateTime: OmaSettingDateTime | undefined = {} as OmaSettingDateTime) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOmaSetting(omaSettingDateTime),
        "value": n => { omaSettingDateTime.value = n.getDateValue(); },
    }
}
