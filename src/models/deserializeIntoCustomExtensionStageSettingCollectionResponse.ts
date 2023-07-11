import {createCustomExtensionStageSettingFromDiscriminatorValue} from './createCustomExtensionStageSettingFromDiscriminatorValue';
import {CustomExtensionStageSetting} from './customExtensionStageSetting';
import {CustomExtensionStageSettingCollectionResponse} from './customExtensionStageSettingCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeCustomExtensionStageSetting} from './serializeCustomExtensionStageSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomExtensionStageSettingCollectionResponse(customExtensionStageSettingCollectionResponse: CustomExtensionStageSettingCollectionResponse | undefined = {} as CustomExtensionStageSettingCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(customExtensionStageSettingCollectionResponse),
        "value": n => { customExtensionStageSettingCollectionResponse.value = n.getCollectionOfObjectValues<CustomExtensionStageSetting>(createCustomExtensionStageSettingFromDiscriminatorValue); },
    }
}
