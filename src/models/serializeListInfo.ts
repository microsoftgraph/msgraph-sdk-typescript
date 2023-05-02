import {ListInfo} from './listInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeListInfo(writer: SerializationWriter, listInfo: ListInfo | undefined = {} as ListInfo) : void {
        writer.writeBooleanValue("contentTypesEnabled", listInfo.contentTypesEnabled);
        writer.writeBooleanValue("hidden", listInfo.hidden);
        writer.writeStringValue("@odata.type", listInfo.odataType);
        writer.writeStringValue("template", listInfo.template);
        writer.writeAdditionalData(listInfo.additionalData);
}
