import {OmaSettingFloatingPointImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingFloatingPointFromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSettingFloatingPointImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OmaSettingFloatingPointImpl();
}
