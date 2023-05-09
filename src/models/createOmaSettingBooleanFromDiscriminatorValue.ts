import {deserializeIntoOmaSettingBoolean} from './deserializeIntoOmaSettingBoolean';
import {OmaSettingBoolean} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingBooleanFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOmaSettingBoolean;
}
