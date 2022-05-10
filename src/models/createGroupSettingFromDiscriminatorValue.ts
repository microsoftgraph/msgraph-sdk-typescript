import {GroupSettingImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupSettingImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupSettingImpl();
}
