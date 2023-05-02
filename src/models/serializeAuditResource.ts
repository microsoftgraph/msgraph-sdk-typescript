import {AuditProperty} from './auditProperty';
import {AuditResource} from './auditResource';
import {serializeAuditProperty} from './serializeAuditProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditResource(writer: SerializationWriter, auditResource: AuditResource | undefined = {} as AuditResource) : void {
        writer.writeStringValue("auditResourceType", auditResource.auditResourceType);
        writer.writeStringValue("displayName", auditResource.displayName);
        writer.writeCollectionOfObjectValues<AuditProperty>("modifiedProperties", auditResource.modifiedProperties, serializeAuditProperty);
        writer.writeStringValue("@odata.type", auditResource.odataType);
        writer.writeStringValue("resourceId", auditResource.resourceId);
        writer.writeAdditionalData(auditResource.additionalData);
}
