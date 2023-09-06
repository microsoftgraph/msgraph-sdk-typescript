import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { type EdiscoveryNoncustodialDataSource } from './ediscoveryNoncustodialDataSource';
import { type EdiscoveryNoncustodialDataSourceCollectionResponse } from './ediscoveryNoncustodialDataSourceCollectionResponse';
import { serializeEdiscoveryNoncustodialDataSource } from './serializeEdiscoveryNoncustodialDataSource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryNoncustodialDataSourceCollectionResponse(writer: SerializationWriter, ediscoveryNoncustodialDataSourceCollectionResponse: EdiscoveryNoncustodialDataSourceCollectionResponse | undefined = {} as EdiscoveryNoncustodialDataSourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryNoncustodialDataSourceCollectionResponse)
        writer.writeCollectionOfObjectValues<EdiscoveryNoncustodialDataSource>("value", ediscoveryNoncustodialDataSourceCollectionResponse.value, serializeEdiscoveryNoncustodialDataSource);
}
