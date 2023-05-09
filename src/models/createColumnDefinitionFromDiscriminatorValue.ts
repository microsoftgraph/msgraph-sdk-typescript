import {deserializeIntoColumnDefinition} from './deserializeIntoColumnDefinition';
import {ColumnDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoColumnDefinition;
}
