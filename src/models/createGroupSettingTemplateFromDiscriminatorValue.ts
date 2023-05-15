import {deserializeIntoGroupSettingTemplate} from './deserializeIntoGroupSettingTemplate';
import {GroupSettingTemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupSettingTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGroupSettingTemplate;
}
