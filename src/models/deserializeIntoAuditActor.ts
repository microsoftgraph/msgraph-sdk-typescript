import {AuditActor} from './auditActor';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditActor(auditActor: AuditActor | undefined = {} as AuditActor) : Record<string, (node: ParseNode) => void> {
    return {
        "applicationDisplayName": n => { auditActor.applicationDisplayName = n.getStringValue(); },
        "applicationId": n => { auditActor.applicationId = n.getStringValue(); },
        "auditActorType": n => { auditActor.auditActorType = n.getStringValue(); },
        "ipAddress": n => { auditActor.ipAddress = n.getStringValue(); },
        "@odata.type": n => { auditActor.odataType = n.getStringValue(); },
        "servicePrincipalName": n => { auditActor.servicePrincipalName = n.getStringValue(); },
        "userId": n => { auditActor.userId = n.getStringValue(); },
        "userPermissions": n => { auditActor.userPermissions = n.getCollectionOfPrimitiveValues<string>(); },
        "userPrincipalName": n => { auditActor.userPrincipalName = n.getStringValue(); },
    }
}
