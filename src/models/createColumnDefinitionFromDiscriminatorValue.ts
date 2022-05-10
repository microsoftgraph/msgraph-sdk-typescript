import {ColumnDefinitionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ColumnDefinitionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ColumnDefinitionImpl();
}
