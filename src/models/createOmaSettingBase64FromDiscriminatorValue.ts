import {OmaSettingBase64Impl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingBase64FromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSettingBase64Impl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OmaSettingBase64Impl();
}
