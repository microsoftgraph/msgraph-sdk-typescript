import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryNoncustodialDataSource} from './ediscoveryNoncustodialDataSource';
import {EdiscoveryNoncustodialDataSourceCollectionResponse} from './ediscoveryNoncustodialDataSourceCollectionResponse';
import {serializeEdiscoveryNoncustodialDataSource} from './serializeEdiscoveryNoncustodialDataSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryNoncustodialDataSourceCollectionResponse(writer: SerializationWriter, ediscoveryNoncustodialDataSourceCollectionResponse: EdiscoveryNoncustodialDataSourceCollectionResponse | undefined = {} as EdiscoveryNoncustodialDataSourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryNoncustodialDataSourceCollectionResponse)
        writer.writeCollectionOfObjectValues<EdiscoveryNoncustodialDataSource>("value", ediscoveryNoncustodialDataSourceCollectionResponse.value, serializeEdiscoveryNoncustodialDataSource);
}
