import {DelegatedAdminRelationshipOperation} from './delegatedAdminRelationshipOperation';
import {DelegatedAdminRelationshipOperationType} from './delegatedAdminRelationshipOperationType';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {LongRunningOperationStatus} from './longRunningOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminRelationshipOperation(delegatedAdminRelationshipOperation: DelegatedAdminRelationshipOperation | undefined = {} as DelegatedAdminRelationshipOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(delegatedAdminRelationshipOperation),
        "createdDateTime": n => { delegatedAdminRelationshipOperation.createdDateTime = n.getDateValue(); },
        "data": n => { delegatedAdminRelationshipOperation.data = n.getStringValue(); },
        "lastModifiedDateTime": n => { delegatedAdminRelationshipOperation.lastModifiedDateTime = n.getDateValue(); },
        "operationType": n => { delegatedAdminRelationshipOperation.operationType = n.getEnumValue<DelegatedAdminRelationshipOperationType>(DelegatedAdminRelationshipOperationType); },
        "status": n => { delegatedAdminRelationshipOperation.status = n.getEnumValue<LongRunningOperationStatus>(LongRunningOperationStatus); },
    }
}
