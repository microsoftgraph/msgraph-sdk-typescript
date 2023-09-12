import { deserializeIntoFieldValueSet } from './deserializeIntoFieldValueSet';
import { type FieldValueSet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFieldValueSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFieldValueSet;
}
