import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {ConnectionOperation} from './connectionOperation';
import type {ConnectionOperationCollectionResponse} from './connectionOperationCollectionResponse';
import {serializeConnectionOperation} from './serializeConnectionOperation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConnectionOperationCollectionResponse(writer: SerializationWriter, connectionOperationCollectionResponse: ConnectionOperationCollectionResponse | undefined = {} as ConnectionOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, connectionOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<ConnectionOperation>("value", connectionOperationCollectionResponse.value, serializeConnectionOperation);
}
