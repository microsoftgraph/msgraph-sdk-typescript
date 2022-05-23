import {GroupSettingTemplateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupSettingTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupSettingTemplateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupSettingTemplateImpl();
}
