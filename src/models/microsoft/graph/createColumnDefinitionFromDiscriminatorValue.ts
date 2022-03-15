import {ColumnDefinition} from './columnDefinition';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ColumnDefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ColumnDefinition();
}
