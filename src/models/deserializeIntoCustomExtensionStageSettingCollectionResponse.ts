import { createCustomExtensionStageSettingFromDiscriminatorValue } from './createCustomExtensionStageSettingFromDiscriminatorValue';
import { type CustomExtensionStageSetting } from './customExtensionStageSetting';
import { type CustomExtensionStageSettingCollectionResponse } from './customExtensionStageSettingCollectionResponse';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeCustomExtensionStageSetting } from './serializeCustomExtensionStageSetting';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomExtensionStageSettingCollectionResponse(customExtensionStageSettingCollectionResponse: CustomExtensionStageSettingCollectionResponse | undefined = {} as CustomExtensionStageSettingCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(customExtensionStageSettingCollectionResponse),
        "value": n => { customExtensionStageSettingCollectionResponse.value = n.getCollectionOfObjectValues<CustomExtensionStageSetting>(createCustomExtensionStageSettingFromDiscriminatorValue); },
    }
}
