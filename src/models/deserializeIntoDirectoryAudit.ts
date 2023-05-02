import {AuditActivityInitiator} from './auditActivityInitiator';
import {createAuditActivityInitiatorFromDiscriminatorValue} from './createAuditActivityInitiatorFromDiscriminatorValue';
import {createKeyValueFromDiscriminatorValue} from './createKeyValueFromDiscriminatorValue';
import {createTargetResourceFromDiscriminatorValue} from './createTargetResourceFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DirectoryAudit} from './directoryAudit';
import {KeyValue} from './keyValue';
import {OperationResult} from './operationResult';
import {serializeAuditActivityInitiator} from './serializeAuditActivityInitiator';
import {serializeKeyValue} from './serializeKeyValue';
import {serializeTargetResource} from './serializeTargetResource';
import {TargetResource} from './targetResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryAudit(directoryAudit: DirectoryAudit | undefined = {} as DirectoryAudit) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(directoryAudit),
        "activityDateTime": n => { directoryAudit.activityDateTime = n.getDateValue(); },
        "activityDisplayName": n => { directoryAudit.activityDisplayName = n.getStringValue(); },
        "additionalDetails": n => { directoryAudit.additionalDetails = n.getCollectionOfObjectValues<KeyValue>(createKeyValueFromDiscriminatorValue); },
        "category": n => { directoryAudit.category = n.getStringValue(); },
        "correlationId": n => { directoryAudit.correlationId = n.getStringValue(); },
        "initiatedBy": n => { directoryAudit.initiatedBy = n.getObjectValue<AuditActivityInitiator>(createAuditActivityInitiatorFromDiscriminatorValue); },
        "loggedByService": n => { directoryAudit.loggedByService = n.getStringValue(); },
        "operationType": n => { directoryAudit.operationType = n.getStringValue(); },
        "result": n => { directoryAudit.result = n.getEnumValue<OperationResult>(OperationResult); },
        "resultReason": n => { directoryAudit.resultReason = n.getStringValue(); },
        "targetResources": n => { directoryAudit.targetResources = n.getCollectionOfObjectValues<TargetResource>(createTargetResourceFromDiscriminatorValue); },
    }
}
