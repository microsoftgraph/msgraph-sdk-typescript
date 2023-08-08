import type {ItemPreviewInfo} from './itemPreviewInfo';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemPreviewInfo(writer: SerializationWriter, itemPreviewInfo: ItemPreviewInfo | undefined = {} as ItemPreviewInfo) : void {
        writer.writeStringValue("getUrl", itemPreviewInfo.getUrl);
        writer.writeStringValue("@odata.type", itemPreviewInfo.odataType);
        writer.writeStringValue("postParameters", itemPreviewInfo.postParameters);
        writer.writeStringValue("postUrl", itemPreviewInfo.postUrl);
        writer.writeAdditionalData(itemPreviewInfo.additionalData);
}
