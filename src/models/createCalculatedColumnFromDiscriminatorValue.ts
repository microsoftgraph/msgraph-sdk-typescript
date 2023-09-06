import { deserializeIntoCalculatedColumn } from './deserializeIntoCalculatedColumn';
import { type CalculatedColumn } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCalculatedColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalculatedColumn;
}
