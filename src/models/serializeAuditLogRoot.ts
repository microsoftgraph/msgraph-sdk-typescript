import type {AuditLogRoot} from './auditLogRoot';
import type {DirectoryAudit} from './directoryAudit';
import type {ProvisioningObjectSummary} from './provisioningObjectSummary';
import {serializeDirectoryAudit} from './serializeDirectoryAudit';
import {serializeEntity} from './serializeEntity';
import {serializeProvisioningObjectSummary} from './serializeProvisioningObjectSummary';
import {serializeSignIn} from './serializeSignIn';
import type {SignIn} from './signIn';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditLogRoot(writer: SerializationWriter, auditLogRoot: AuditLogRoot | undefined = {} as AuditLogRoot) : void {
        serializeEntity(writer, auditLogRoot)
        writer.writeCollectionOfObjectValues<DirectoryAudit>("directoryAudits", auditLogRoot.directoryAudits, serializeDirectoryAudit);
        writer.writeCollectionOfObjectValues<ProvisioningObjectSummary>("provisioning", auditLogRoot.provisioning, serializeProvisioningObjectSummary);
        writer.writeCollectionOfObjectValues<SignIn>("signIns", auditLogRoot.signIns, serializeSignIn);
}
