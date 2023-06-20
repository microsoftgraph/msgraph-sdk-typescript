import {ItemPreviewInfo} from './itemPreviewInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemPreviewInfo(itemPreviewInfo: ItemPreviewInfo | undefined = {} as ItemPreviewInfo, writer: SerializationWriter) : void {
        writer.writeStringValue("getUrl", itemPreviewInfo.getUrl);
        writer.writeStringValue("@odata.type", itemPreviewInfo.odataType);
        writer.writeStringValue("postParameters", itemPreviewInfo.postParameters);
        writer.writeStringValue("postUrl", itemPreviewInfo.postUrl);
        writer.writeAdditionalData(itemPreviewInfo.additionalData);
}
