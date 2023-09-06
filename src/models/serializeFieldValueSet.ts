import { type FieldValueSet } from './fieldValueSet';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFieldValueSet(writer: SerializationWriter, fieldValueSet: FieldValueSet | undefined = {} as FieldValueSet) : void {
        serializeEntity(writer, fieldValueSet)
}
