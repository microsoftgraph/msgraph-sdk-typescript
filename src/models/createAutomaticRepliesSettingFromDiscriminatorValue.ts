import {AutomaticRepliesSettingImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAutomaticRepliesSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : AutomaticRepliesSettingImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AutomaticRepliesSettingImpl();
}
