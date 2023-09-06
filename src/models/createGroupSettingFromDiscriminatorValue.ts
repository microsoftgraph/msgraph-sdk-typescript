import { deserializeIntoGroupSetting } from './deserializeIntoGroupSetting';
import { type GroupSetting } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGroupSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGroupSetting;
}
