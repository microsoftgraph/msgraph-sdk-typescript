import { deserializeIntoColumnDefinitionCollectionResponse } from './deserializeIntoColumnDefinitionCollectionResponse';
import { type ColumnDefinitionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createColumnDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoColumnDefinitionCollectionResponse;
}
