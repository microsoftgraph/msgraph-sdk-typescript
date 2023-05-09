import {deserializeIntoOmaSettingBase64} from './deserializeIntoOmaSettingBase64';
import {OmaSettingBase64} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingBase64FromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOmaSettingBase64;
}
