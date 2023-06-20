import {InternetMessageHeader} from './internetMessageHeader';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInternetMessageHeader(internetMessageHeader: InternetMessageHeader | undefined = {} as InternetMessageHeader, writer: SerializationWriter) : void {
        writer.writeStringValue("name", internetMessageHeader.name);
        writer.writeStringValue("@odata.type", internetMessageHeader.odataType);
        writer.writeStringValue("value", internetMessageHeader.value);
        writer.writeAdditionalData(internetMessageHeader.additionalData);
}
