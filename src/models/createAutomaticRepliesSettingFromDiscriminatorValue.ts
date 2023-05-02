import {deserializeIntoAutomaticRepliesSetting} from './deserializeIntoAutomaticRepliesSetting';
import {AutomaticRepliesSetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAutomaticRepliesSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAutomaticRepliesSetting;
}
