import {deserializeIntoFieldValueSet} from './deserializeIntoFieldValueSet';
import {FieldValueSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFieldValueSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFieldValueSet;
}
