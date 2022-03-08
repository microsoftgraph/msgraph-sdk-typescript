import {FieldValueSet} from './fieldValueSet';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFieldValueSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : FieldValueSet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FieldValueSet();
}
