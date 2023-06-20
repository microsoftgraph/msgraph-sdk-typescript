import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {ConnectionOperation} from './connectionOperation';
import {ConnectionOperationCollectionResponse} from './connectionOperationCollectionResponse';
import {serializeConnectionOperation} from './serializeConnectionOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConnectionOperationCollectionResponse(connectionOperationCollectionResponse: ConnectionOperationCollectionResponse | undefined = {} as ConnectionOperationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, connectionOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<ConnectionOperation>("value", connectionOperationCollectionResponse.value, serializeConnectionOperation);
}
