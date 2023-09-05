import { deserializeIntoCustomExtensionStageSettingCollectionResponse } from './deserializeIntoCustomExtensionStageSettingCollectionResponse';
import { type CustomExtensionStageSettingCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCustomExtensionStageSettingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomExtensionStageSettingCollectionResponse;
}
