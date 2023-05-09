import {PersonOrGroupColumn} from './personOrGroupColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonOrGroupColumn(writer: SerializationWriter, personOrGroupColumn: PersonOrGroupColumn | undefined = {} as PersonOrGroupColumn) : void {
        writer.writeBooleanValue("allowMultipleSelection", personOrGroupColumn.allowMultipleSelection);
        writer.writeStringValue("chooseFromType", personOrGroupColumn.chooseFromType);
        writer.writeStringValue("displayAs", personOrGroupColumn.displayAs);
        writer.writeStringValue("@odata.type", personOrGroupColumn.odataType);
        writer.writeAdditionalData(personOrGroupColumn.additionalData);
}
