import {InternetMessageHeader} from './internetMessageHeader';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInternetMessageHeader(writer: SerializationWriter, internetMessageHeader: InternetMessageHeader | undefined = {} as InternetMessageHeader) : void {
        writer.writeStringValue("name", internetMessageHeader.name);
        writer.writeStringValue("@odata.type", internetMessageHeader.odataType);
        writer.writeStringValue("value", internetMessageHeader.value);
        writer.writeAdditionalData(internetMessageHeader.additionalData);
}
