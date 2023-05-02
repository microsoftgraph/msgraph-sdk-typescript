import {AuditProperty} from './auditProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditProperty(writer: SerializationWriter, auditProperty: AuditProperty | undefined = {} as AuditProperty) : void {
        writer.writeStringValue("displayName", auditProperty.displayName);
        writer.writeStringValue("newValue", auditProperty.newValue);
        writer.writeStringValue("@odata.type", auditProperty.odataType);
        writer.writeStringValue("oldValue", auditProperty.oldValue);
        writer.writeAdditionalData(auditProperty.additionalData);
}
