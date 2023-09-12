import { type ColumnDefinition } from './columnDefinition';
import { type ColumnDefinitionCollectionResponse } from './columnDefinitionCollectionResponse';
import { createColumnDefinitionFromDiscriminatorValue } from './createColumnDefinitionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeColumnDefinition } from './serializeColumnDefinition';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoColumnDefinitionCollectionResponse(columnDefinitionCollectionResponse: ColumnDefinitionCollectionResponse | undefined = {} as ColumnDefinitionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(columnDefinitionCollectionResponse),
        "value": n => { columnDefinitionCollectionResponse.value = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
    }
}
