import {DelegatedAdminRelationshipOperation} from './delegatedAdminRelationshipOperation';
import {DelegatedAdminRelationshipOperationType} from './delegatedAdminRelationshipOperationType';
import {LongRunningOperationStatus} from './longRunningOperationStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedAdminRelationshipOperation(writer: SerializationWriter, delegatedAdminRelationshipOperation: DelegatedAdminRelationshipOperation | undefined = {} as DelegatedAdminRelationshipOperation) : void {
        serializeEntity(writer, delegatedAdminRelationshipOperation)
        writer.writeDateValue("createdDateTime", delegatedAdminRelationshipOperation.createdDateTime);
        writer.writeStringValue("data", delegatedAdminRelationshipOperation.data);
        writer.writeDateValue("lastModifiedDateTime", delegatedAdminRelationshipOperation.lastModifiedDateTime);
        writer.writeEnumValue<DelegatedAdminRelationshipOperationType>("operationType", delegatedAdminRelationshipOperation.operationType);
        writer.writeEnumValue<LongRunningOperationStatus>("status", delegatedAdminRelationshipOperation.status);
}
