import {deserializeIntoGroupSettingTemplateCollectionResponse} from './deserializeIntoGroupSettingTemplateCollectionResponse';
import {GroupSettingTemplateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupSettingTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGroupSettingTemplateCollectionResponse;
}
