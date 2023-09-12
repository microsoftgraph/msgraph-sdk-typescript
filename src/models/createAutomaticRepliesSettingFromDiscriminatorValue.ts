import { deserializeIntoAutomaticRepliesSetting } from './deserializeIntoAutomaticRepliesSetting';
import { type AutomaticRepliesSetting } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAutomaticRepliesSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAutomaticRepliesSetting;
}
