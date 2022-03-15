import {CalculatedColumn} from './calculatedColumn';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalculatedColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalculatedColumn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalculatedColumn();
}
