import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { type ConnectionOperation } from './connectionOperation';
import { type ConnectionOperationCollectionResponse } from './connectionOperationCollectionResponse';
import { createConnectionOperationFromDiscriminatorValue } from './createConnectionOperationFromDiscriminatorValue';
import { serializeConnectionOperation } from './serializeConnectionOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConnectionOperationCollectionResponse(connectionOperationCollectionResponse: ConnectionOperationCollectionResponse | undefined = {} as ConnectionOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(connectionOperationCollectionResponse),
        "value": n => { connectionOperationCollectionResponse.value = n.getCollectionOfObjectValues<ConnectionOperation>(createConnectionOperationFromDiscriminatorValue); },
    }
}
