import { deserializeIntoColumnValidation } from './deserializeIntoColumnValidation';
import { type ColumnValidation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createColumnValidationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoColumnValidation;
}
