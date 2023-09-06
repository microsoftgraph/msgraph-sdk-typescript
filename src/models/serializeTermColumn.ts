import { type TermColumn } from './termColumn';
import { serializeSet } from './termStore/serializeSet';
import { serializeTerm } from './termStore/serializeTerm';
import { type Set } from './termStore/set';
import { type Term } from './termStore/term';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTermColumn(writer: SerializationWriter, termColumn: TermColumn | undefined = {} as TermColumn) : void {
        writer.writeBooleanValue("allowMultipleValues", termColumn.allowMultipleValues);
        writer.writeStringValue("@odata.type", termColumn.odataType);
        writer.writeObjectValue<Term>("parentTerm", termColumn.parentTerm, serializeTerm);
        writer.writeBooleanValue("showFullyQualifiedName", termColumn.showFullyQualifiedName);
        writer.writeObjectValue<Set>("termSet", termColumn.termSet, serializeSet);
        writer.writeAdditionalData(termColumn.additionalData);
}
