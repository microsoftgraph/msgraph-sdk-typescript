import {deserializeIntoColumnDefinitionCollectionResponse} from './deserializeIntoColumnDefinitionCollectionResponse';
import {ColumnDefinitionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoColumnDefinitionCollectionResponse;
}
