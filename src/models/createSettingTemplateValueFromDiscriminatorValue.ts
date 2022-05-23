import {SettingTemplateValueImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSettingTemplateValueFromDiscriminatorValue(parseNode: ParseNode | undefined) : SettingTemplateValueImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SettingTemplateValueImpl();
}
