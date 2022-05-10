import {GroupSettingTemplateCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupSettingTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupSettingTemplateCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupSettingTemplateCollectionResponseImpl();
}
