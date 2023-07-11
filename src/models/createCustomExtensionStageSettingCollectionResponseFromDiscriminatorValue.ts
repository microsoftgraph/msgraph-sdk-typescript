import {deserializeIntoCustomExtensionStageSettingCollectionResponse} from './deserializeIntoCustomExtensionStageSettingCollectionResponse';
import {CustomExtensionStageSettingCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomExtensionStageSettingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomExtensionStageSettingCollectionResponse;
}
