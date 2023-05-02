import {OperationError} from './operationError';
import {serializeEntity} from './serializeEntity';
import {serializeOperationError} from './serializeOperationError';
import {TeamsAsyncOperation} from './teamsAsyncOperation';
import {TeamsAsyncOperationStatus} from './teamsAsyncOperationStatus';
import {TeamsAsyncOperationType} from './teamsAsyncOperationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAsyncOperation(writer: SerializationWriter, teamsAsyncOperation: TeamsAsyncOperation | undefined = {} as TeamsAsyncOperation) : void {
        serializeEntity(writer, teamsAsyncOperation)
        writer.writeNumberValue("attemptsCount", teamsAsyncOperation.attemptsCount);
        writer.writeDateValue("createdDateTime", teamsAsyncOperation.createdDateTime);
        writer.writeObjectValue<OperationError>("error", teamsAsyncOperation.errorEscaped, serializeOperationError);
        writer.writeDateValue("lastActionDateTime", teamsAsyncOperation.lastActionDateTime);
        writer.writeEnumValue<TeamsAsyncOperationType>("operationType", teamsAsyncOperation.operationType);
        writer.writeEnumValue<TeamsAsyncOperationStatus>("status", teamsAsyncOperation.status);
        writer.writeStringValue("targetResourceId", teamsAsyncOperation.targetResourceId);
        writer.writeStringValue("targetResourceLocation", teamsAsyncOperation.targetResourceLocation);
}
