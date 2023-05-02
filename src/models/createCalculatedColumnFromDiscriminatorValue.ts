import {deserializeIntoCalculatedColumn} from './deserializeIntoCalculatedColumn';
import {CalculatedColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalculatedColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalculatedColumn;
}
