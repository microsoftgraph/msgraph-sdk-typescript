import { type CustomExtensionStageSetting } from './customExtensionStageSetting';
import { type CustomExtensionStageSettingCollectionResponse } from './customExtensionStageSettingCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeCustomExtensionStageSetting } from './serializeCustomExtensionStageSetting';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCustomExtensionStageSettingCollectionResponse(writer: SerializationWriter, customExtensionStageSettingCollectionResponse: CustomExtensionStageSettingCollectionResponse | undefined = {} as CustomExtensionStageSettingCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, customExtensionStageSettingCollectionResponse)
        writer.writeCollectionOfObjectValues<CustomExtensionStageSetting>("value", customExtensionStageSettingCollectionResponse.value, serializeCustomExtensionStageSetting);
}
