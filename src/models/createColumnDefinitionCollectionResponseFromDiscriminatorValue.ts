import {ColumnDefinitionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ColumnDefinitionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ColumnDefinitionCollectionResponseImpl();
}
