import {deserializeIntoFilterOperand} from './deserializeIntoFilterOperand';
import {FilterOperand} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFilterOperandFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFilterOperand;
}
