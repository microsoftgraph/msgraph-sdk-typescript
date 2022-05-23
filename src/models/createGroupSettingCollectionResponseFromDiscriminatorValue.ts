import {GroupSettingCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupSettingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupSettingCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupSettingCollectionResponseImpl();
}
