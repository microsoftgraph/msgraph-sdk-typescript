import { createOperationErrorFromDiscriminatorValue } from './createOperationErrorFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type OperationError } from './operationError';
import { serializeOperationError } from './serializeOperationError';
import { type TeamsAsyncOperation } from './teamsAsyncOperation';
import { TeamsAsyncOperationStatus } from './teamsAsyncOperationStatus';
import { TeamsAsyncOperationType } from './teamsAsyncOperationType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAsyncOperation(teamsAsyncOperation: TeamsAsyncOperation | undefined = {} as TeamsAsyncOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsAsyncOperation),
        "attemptsCount": n => { teamsAsyncOperation.attemptsCount = n.getNumberValue(); },
        "createdDateTime": n => { teamsAsyncOperation.createdDateTime = n.getDateValue(); },
        "error": n => { teamsAsyncOperation.errorEscaped = n.getObjectValue<OperationError>(createOperationErrorFromDiscriminatorValue); },
        "lastActionDateTime": n => { teamsAsyncOperation.lastActionDateTime = n.getDateValue(); },
        "operationType": n => { teamsAsyncOperation.operationType = n.getEnumValue<TeamsAsyncOperationType>(TeamsAsyncOperationType); },
        "status": n => { teamsAsyncOperation.status = n.getEnumValue<TeamsAsyncOperationStatus>(TeamsAsyncOperationStatus); },
        "targetResourceId": n => { teamsAsyncOperation.targetResourceId = n.getStringValue(); },
        "targetResourceLocation": n => { teamsAsyncOperation.targetResourceLocation = n.getStringValue(); },
    }
}
