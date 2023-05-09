import {deserializeIntoSettingTemplateValue} from './deserializeIntoSettingTemplateValue';
import {SettingTemplateValue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSettingTemplateValueFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSettingTemplateValue;
}
