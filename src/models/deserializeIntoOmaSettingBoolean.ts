import { deserializeIntoOmaSetting } from './deserializeIntoOmaSetting';
import { type OmaSettingBoolean } from './omaSettingBoolean';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingBoolean(omaSettingBoolean: OmaSettingBoolean | undefined = {} as OmaSettingBoolean) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOmaSetting(omaSettingBoolean),
        "value": n => { omaSettingBoolean.value = n.getBooleanValue(); },
    }
}
