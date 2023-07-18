import {AddIn} from './addIn';
import {createKeyValueFromDiscriminatorValue} from './createKeyValueFromDiscriminatorValue';
import {KeyValue} from './keyValue';
import {serializeKeyValue} from './serializeKeyValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoAddIn(addIn: AddIn | undefined = {} as AddIn) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { addIn.id = n.getGuidValue(); },
        "@odata.type": n => { addIn.odataType = n.getStringValue(); },
        "properties": n => { addIn.properties = n.getCollectionOfObjectValues<KeyValue>(createKeyValueFromDiscriminatorValue); },
        "type": n => { addIn.type = n.getStringValue(); },
    }
}
