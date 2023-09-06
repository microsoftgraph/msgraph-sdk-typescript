import { deserializeIntoOmaSetting } from './deserializeIntoOmaSetting';
import { type OmaSettingStringXml } from './omaSettingStringXml';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingStringXml(omaSettingStringXml: OmaSettingStringXml | undefined = {} as OmaSettingStringXml) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOmaSetting(omaSettingStringXml),
        "fileName": n => { omaSettingStringXml.fileName = n.getStringValue(); },
        "value": n => { omaSettingStringXml.value = n.getStringValue(); },
    }
}
