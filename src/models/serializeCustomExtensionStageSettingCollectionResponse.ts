import {CustomExtensionStageSetting} from './customExtensionStageSetting';
import {CustomExtensionStageSettingCollectionResponse} from './customExtensionStageSettingCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCustomExtensionStageSetting} from './serializeCustomExtensionStageSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomExtensionStageSettingCollectionResponse(writer: SerializationWriter, customExtensionStageSettingCollectionResponse: CustomExtensionStageSettingCollectionResponse | undefined = {} as CustomExtensionStageSettingCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, customExtensionStageSettingCollectionResponse)
        writer.writeCollectionOfObjectValues<CustomExtensionStageSetting>("value", customExtensionStageSettingCollectionResponse.value, serializeCustomExtensionStageSetting);
}
