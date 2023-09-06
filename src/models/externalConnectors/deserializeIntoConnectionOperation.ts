import { createPublicErrorFromDiscriminatorValue } from '../createPublicErrorFromDiscriminatorValue';
import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type PublicError } from '../publicError';
import { serializePublicError } from '../serializePublicError';
import { type ConnectionOperation } from './connectionOperation';
import { ConnectionOperationStatus } from './connectionOperationStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConnectionOperation(connectionOperation: ConnectionOperation | undefined = {} as ConnectionOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(connectionOperation),
        "error": n => { connectionOperation.errorEscaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); },
        "status": n => { connectionOperation.status = n.getEnumValue<ConnectionOperationStatus>(ConnectionOperationStatus); },
    }
}
