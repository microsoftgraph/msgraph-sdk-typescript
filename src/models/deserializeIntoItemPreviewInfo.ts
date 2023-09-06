import { type ItemPreviewInfo } from './itemPreviewInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoItemPreviewInfo(itemPreviewInfo: ItemPreviewInfo | undefined = {} as ItemPreviewInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "getUrl": n => { itemPreviewInfo.getUrl = n.getStringValue(); },
        "@odata.type": n => { itemPreviewInfo.odataType = n.getStringValue(); },
        "postParameters": n => { itemPreviewInfo.postParameters = n.getStringValue(); },
        "postUrl": n => { itemPreviewInfo.postUrl = n.getStringValue(); },
    }
}
