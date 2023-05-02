import {TermColumn} from './termColumn';
import {serializeSet} from './termStore/serializeSet';
import {serializeTerm} from './termStore/serializeTerm';
import {Set} from './termStore/set';
import {Term} from './termStore/term';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermColumn(writer: SerializationWriter, termColumn: TermColumn | undefined = {} as TermColumn) : void {
        writer.writeBooleanValue("allowMultipleValues", termColumn.allowMultipleValues);
        writer.writeStringValue("@odata.type", termColumn.odataType);
        writer.writeObjectValue<Term>("parentTerm", termColumn.parentTerm, serializeTerm);
        writer.writeBooleanValue("showFullyQualifiedName", termColumn.showFullyQualifiedName);
        writer.writeObjectValue<Set>("termSet", termColumn.termSet, serializeSet);
        writer.writeAdditionalData(termColumn.additionalData);
}
