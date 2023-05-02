import {Dictionary} from './dictionary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDictionary(writer: SerializationWriter, dictionary: Dictionary | undefined = {} as Dictionary) : void {
        writer.writeStringValue("@odata.type", dictionary.odataType);
        writer.writeAdditionalData(dictionary.additionalData);
}
