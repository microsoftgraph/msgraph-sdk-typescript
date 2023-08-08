import type {Phone} from './phone';
import {PhoneType} from './phoneType';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhone(writer: SerializationWriter, phone: Phone | undefined = {} as Phone) : void {
        writer.writeStringValue("language", phone.language);
        writer.writeStringValue("number", phone.number);
        writer.writeStringValue("@odata.type", phone.odataType);
        writer.writeStringValue("region", phone.region);
        writer.writeEnumValue<PhoneType>("type", phone.type);
        writer.writeAdditionalData(phone.additionalData);
}
