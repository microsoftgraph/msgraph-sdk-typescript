import {FieldValueSet} from './fieldValueSet';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFieldValueSet(fieldValueSet: FieldValueSet | undefined = {} as FieldValueSet, writer: SerializationWriter) : void {
        serializeEntity(writer, fieldValueSet)
}
