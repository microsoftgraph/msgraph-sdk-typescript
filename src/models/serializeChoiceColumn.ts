import {ChoiceColumn} from './choiceColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChoiceColumn(writer: SerializationWriter, choiceColumn: ChoiceColumn | undefined = {} as ChoiceColumn) : void {
        writer.writeBooleanValue("allowTextEntry", choiceColumn.allowTextEntry);
        writer.writeCollectionOfPrimitiveValues<string>("choices", choiceColumn.choices);
        writer.writeStringValue("displayAs", choiceColumn.displayAs);
        writer.writeStringValue("@odata.type", choiceColumn.odataType);
        writer.writeAdditionalData(choiceColumn.additionalData);
}
