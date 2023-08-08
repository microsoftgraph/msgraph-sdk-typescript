import type {AuditActivityInitiator} from './auditActivityInitiator';
import type {DirectoryAudit} from './directoryAudit';
import type {KeyValue} from './keyValue';
import {OperationResult} from './operationResult';
import {serializeAuditActivityInitiator} from './serializeAuditActivityInitiator';
import {serializeEntity} from './serializeEntity';
import {serializeKeyValue} from './serializeKeyValue';
import {serializeTargetResource} from './serializeTargetResource';
import type {TargetResource} from './targetResource';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryAudit(writer: SerializationWriter, directoryAudit: DirectoryAudit | undefined = {} as DirectoryAudit) : void {
        serializeEntity(writer, directoryAudit)
        writer.writeDateValue("activityDateTime", directoryAudit.activityDateTime);
        writer.writeStringValue("activityDisplayName", directoryAudit.activityDisplayName);
        writer.writeCollectionOfObjectValues<KeyValue>("additionalDetails", directoryAudit.additionalDetails, serializeKeyValue);
        writer.writeStringValue("category", directoryAudit.category);
        writer.writeStringValue("correlationId", directoryAudit.correlationId);
        writer.writeObjectValue<AuditActivityInitiator>("initiatedBy", directoryAudit.initiatedBy, serializeAuditActivityInitiator);
        writer.writeStringValue("loggedByService", directoryAudit.loggedByService);
        writer.writeStringValue("operationType", directoryAudit.operationType);
        writer.writeEnumValue<OperationResult>("result", directoryAudit.result);
        writer.writeStringValue("resultReason", directoryAudit.resultReason);
        writer.writeCollectionOfObjectValues<TargetResource>("targetResources", directoryAudit.targetResources, serializeTargetResource);
}
