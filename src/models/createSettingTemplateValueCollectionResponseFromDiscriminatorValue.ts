import {SettingTemplateValueCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSettingTemplateValueCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SettingTemplateValueCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SettingTemplateValueCollectionResponse();
}
