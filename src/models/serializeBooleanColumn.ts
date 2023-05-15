import {BooleanColumn} from './booleanColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBooleanColumn(writer: SerializationWriter, booleanColumn: BooleanColumn | undefined = {} as BooleanColumn) : void {
        writer.writeStringValue("@odata.type", booleanColumn.odataType);
        writer.writeAdditionalData(booleanColumn.additionalData);
}
