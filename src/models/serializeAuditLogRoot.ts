import {AuditLogRoot} from './auditLogRoot';
import {DirectoryAudit} from './directoryAudit';
import {ProvisioningObjectSummary} from './provisioningObjectSummary';
import {serializeDirectoryAudit} from './serializeDirectoryAudit';
import {serializeEntity} from './serializeEntity';
import {serializeProvisioningObjectSummary} from './serializeProvisioningObjectSummary';
import {serializeSignIn} from './serializeSignIn';
import {SignIn} from './signIn';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditLogRoot(writer: SerializationWriter, auditLogRoot: AuditLogRoot | undefined = {} as AuditLogRoot) : void {
        serializeEntity(writer, auditLogRoot)
        writer.writeCollectionOfObjectValues<DirectoryAudit>("directoryAudits", auditLogRoot.directoryAudits, serializeDirectoryAudit);
        writer.writeCollectionOfObjectValues<ProvisioningObjectSummary>("provisioning", auditLogRoot.provisioning, serializeProvisioningObjectSummary);
        writer.writeCollectionOfObjectValues<SignIn>("signIns", auditLogRoot.signIns, serializeSignIn);
}
