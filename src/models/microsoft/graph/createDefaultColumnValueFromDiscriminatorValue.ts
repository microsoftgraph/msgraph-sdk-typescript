import {DefaultColumnValue} from './defaultColumnValue';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDefaultColumnValueFromDiscriminatorValue(parseNode: ParseNode | undefined) : DefaultColumnValue {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DefaultColumnValue();
}
