import {PersonType} from './personType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonType(writer: SerializationWriter, personType: PersonType | undefined = {} as PersonType) : void {
        writer.writeStringValue("class", personType.classEscaped);
        writer.writeStringValue("@odata.type", personType.odataType);
        writer.writeStringValue("subclass", personType.subclass);
        writer.writeAdditionalData(personType.additionalData);
}
