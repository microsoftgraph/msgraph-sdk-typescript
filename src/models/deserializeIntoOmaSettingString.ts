import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {OmaSettingString} from './omaSettingString';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingString(omaSettingString: OmaSettingString | undefined = {} as OmaSettingString) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOmaSetting(omaSettingString),
        "value": n => { omaSettingString.value = n.getStringValue(); },
    }
}
