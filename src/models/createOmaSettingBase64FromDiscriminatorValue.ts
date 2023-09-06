import { deserializeIntoOmaSettingBase64 } from './deserializeIntoOmaSettingBase64';
import { type OmaSettingBase64 } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOmaSettingBase64FromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOmaSettingBase64;
}
