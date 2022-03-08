import {GroupSetting} from './groupSetting';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupSetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupSetting();
}
