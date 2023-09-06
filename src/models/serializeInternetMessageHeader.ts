import { type InternetMessageHeader } from './internetMessageHeader';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeInternetMessageHeader(writer: SerializationWriter, internetMessageHeader: InternetMessageHeader | undefined = {} as InternetMessageHeader) : void {
        writer.writeStringValue("name", internetMessageHeader.name);
        writer.writeStringValue("@odata.type", internetMessageHeader.odataType);
        writer.writeStringValue("value", internetMessageHeader.value);
        writer.writeAdditionalData(internetMessageHeader.additionalData);
}
