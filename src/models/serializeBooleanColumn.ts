import {BooleanColumn} from './booleanColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBooleanColumn(booleanColumn: BooleanColumn | undefined = {} as BooleanColumn, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", booleanColumn.odataType);
        writer.writeAdditionalData(booleanColumn.additionalData);
}
