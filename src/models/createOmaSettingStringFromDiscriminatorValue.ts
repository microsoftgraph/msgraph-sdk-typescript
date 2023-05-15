import {deserializeIntoOmaSettingString} from './deserializeIntoOmaSettingString';
import {OmaSettingString} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingStringFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOmaSettingString;
}
