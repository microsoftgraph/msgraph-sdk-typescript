import { type ContentTypeInfo } from './contentTypeInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoContentTypeInfo(contentTypeInfo: ContentTypeInfo | undefined = {} as ContentTypeInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { contentTypeInfo.id = n.getStringValue(); },
        "name": n => { contentTypeInfo.name = n.getStringValue(); },
        "@odata.type": n => { contentTypeInfo.odataType = n.getStringValue(); },
    }
}
