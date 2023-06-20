import {Dictionary} from './dictionary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDictionary(dictionary: Dictionary | undefined = {} as Dictionary, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", dictionary.odataType);
        writer.writeAdditionalData(dictionary.additionalData);
}
