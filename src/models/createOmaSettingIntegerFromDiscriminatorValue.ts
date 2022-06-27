import {OmaSettingIntegerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingIntegerFromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSettingIntegerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OmaSettingIntegerImpl();
}
