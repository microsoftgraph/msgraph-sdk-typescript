import {deserializeIntoBooleanColumn} from './deserializeIntoBooleanColumn';
import {BooleanColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBooleanColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBooleanColumn;
}
