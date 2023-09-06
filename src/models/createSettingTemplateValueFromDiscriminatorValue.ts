import { deserializeIntoSettingTemplateValue } from './deserializeIntoSettingTemplateValue';
import { type SettingTemplateValue } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSettingTemplateValueFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSettingTemplateValue;
}
