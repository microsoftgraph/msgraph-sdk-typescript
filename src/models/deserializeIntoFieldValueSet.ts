import {deserializeIntoEntity} from './deserializeIntoEntity';
import {FieldValueSet} from './fieldValueSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFieldValueSet(fieldValueSet: FieldValueSet | undefined = {} as FieldValueSet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(fieldValueSet),
    }
}
