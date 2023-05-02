import {deserializeIntoNumberColumn} from './deserializeIntoNumberColumn';
import {NumberColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNumberColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNumberColumn;
}
