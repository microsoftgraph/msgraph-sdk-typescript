import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue } from './createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue';
import { type EdiscoveryNoncustodialDataSource } from './ediscoveryNoncustodialDataSource';
import { type EdiscoveryNoncustodialDataSourceCollectionResponse } from './ediscoveryNoncustodialDataSourceCollectionResponse';
import { serializeEdiscoveryNoncustodialDataSource } from './serializeEdiscoveryNoncustodialDataSource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryNoncustodialDataSourceCollectionResponse(ediscoveryNoncustodialDataSourceCollectionResponse: EdiscoveryNoncustodialDataSourceCollectionResponse | undefined = {} as EdiscoveryNoncustodialDataSourceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryNoncustodialDataSourceCollectionResponse),
        "value": n => { ediscoveryNoncustodialDataSourceCollectionResponse.value = n.getCollectionOfObjectValues<EdiscoveryNoncustodialDataSource>(createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue); },
    }
}
