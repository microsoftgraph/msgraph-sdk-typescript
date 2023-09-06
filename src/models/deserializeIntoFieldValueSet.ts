import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type FieldValueSet } from './fieldValueSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFieldValueSet(fieldValueSet: FieldValueSet | undefined = {} as FieldValueSet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(fieldValueSet),
    }
}
