import {AuditActor} from './auditActor';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditActor(writer: SerializationWriter, auditActor: AuditActor | undefined = {} as AuditActor) : void {
        writer.writeStringValue("applicationDisplayName", auditActor.applicationDisplayName);
        writer.writeStringValue("applicationId", auditActor.applicationId);
        writer.writeStringValue("auditActorType", auditActor.auditActorType);
        writer.writeStringValue("ipAddress", auditActor.ipAddress);
        writer.writeStringValue("@odata.type", auditActor.odataType);
        writer.writeStringValue("servicePrincipalName", auditActor.servicePrincipalName);
        writer.writeStringValue("userId", auditActor.userId);
        writer.writeCollectionOfPrimitiveValues<string>("userPermissions", auditActor.userPermissions);
        writer.writeStringValue("userPrincipalName", auditActor.userPrincipalName);
        writer.writeAdditionalData(auditActor.additionalData);
}
