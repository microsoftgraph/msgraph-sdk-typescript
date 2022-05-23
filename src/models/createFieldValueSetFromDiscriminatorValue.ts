import {FieldValueSetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFieldValueSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : FieldValueSetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FieldValueSetImpl();
}
