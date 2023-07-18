import {AddIn} from './addIn';
import {KeyValue} from './keyValue';
import {serializeKeyValue} from './serializeKeyValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeAddIn(writer: SerializationWriter, addIn: AddIn | undefined = {} as AddIn) : void {
        writer.writeGuidValue("id", addIn.id);
        writer.writeStringValue("@odata.type", addIn.odataType);
        writer.writeCollectionOfObjectValues<KeyValue>("properties", addIn.properties, serializeKeyValue);
        writer.writeStringValue("type", addIn.type);
        writer.writeAdditionalData(addIn.additionalData);
}
