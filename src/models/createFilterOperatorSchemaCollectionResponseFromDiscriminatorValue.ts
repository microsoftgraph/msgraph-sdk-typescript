import { deserializeIntoFilterOperatorSchemaCollectionResponse } from './deserializeIntoFilterOperatorSchemaCollectionResponse';
import { type FilterOperatorSchemaCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFilterOperatorSchemaCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFilterOperatorSchemaCollectionResponse;
}
