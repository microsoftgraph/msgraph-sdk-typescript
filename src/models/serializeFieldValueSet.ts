import {FieldValueSet} from './fieldValueSet';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFieldValueSet(writer: SerializationWriter, fieldValueSet: FieldValueSet | undefined = {} as FieldValueSet) : void {
        serializeEntity(writer, fieldValueSet)
}
