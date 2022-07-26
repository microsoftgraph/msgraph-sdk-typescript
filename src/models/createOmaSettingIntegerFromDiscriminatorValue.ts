import {OmaSettingInteger} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingIntegerFromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSettingInteger {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OmaSettingInteger();
}
