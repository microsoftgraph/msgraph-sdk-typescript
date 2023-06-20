import {AlteredQueryToken} from './alteredQueryToken';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlteredQueryToken(alteredQueryToken: AlteredQueryToken | undefined = {} as AlteredQueryToken, writer: SerializationWriter) : void {
        writer.writeNumberValue("length", alteredQueryToken.length);
        writer.writeStringValue("@odata.type", alteredQueryToken.odataType);
        writer.writeNumberValue("offset", alteredQueryToken.offset);
        writer.writeStringValue("suggestion", alteredQueryToken.suggestion);
        writer.writeAdditionalData(alteredQueryToken.additionalData);
}
