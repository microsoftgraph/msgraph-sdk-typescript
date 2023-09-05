import { deserializeIntoGroupSettingCollectionResponse } from './deserializeIntoGroupSettingCollectionResponse';
import { type GroupSettingCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGroupSettingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGroupSettingCollectionResponse;
}
