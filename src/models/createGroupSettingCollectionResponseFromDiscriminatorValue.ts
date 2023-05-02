import {deserializeIntoGroupSettingCollectionResponse} from './deserializeIntoGroupSettingCollectionResponse';
import {GroupSettingCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupSettingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGroupSettingCollectionResponse;
}
