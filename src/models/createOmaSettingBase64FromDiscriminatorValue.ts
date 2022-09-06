import {OmaSettingBase64} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingBase64FromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSettingBase64 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OmaSettingBase64();
}
