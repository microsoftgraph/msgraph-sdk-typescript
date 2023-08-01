import type {AuditLogRoot} from './auditLogRoot';
import {createDirectoryAuditFromDiscriminatorValue} from './createDirectoryAuditFromDiscriminatorValue';
import {createProvisioningObjectSummaryFromDiscriminatorValue} from './createProvisioningObjectSummaryFromDiscriminatorValue';
import {createSignInFromDiscriminatorValue} from './createSignInFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {DirectoryAudit} from './directoryAudit';
import type {ProvisioningObjectSummary} from './provisioningObjectSummary';
import {serializeDirectoryAudit} from './serializeDirectoryAudit';
import {serializeProvisioningObjectSummary} from './serializeProvisioningObjectSummary';
import {serializeSignIn} from './serializeSignIn';
import type {SignIn} from './signIn';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditLogRoot(auditLogRoot: AuditLogRoot | undefined = {} as AuditLogRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(auditLogRoot),
        "directoryAudits": n => { auditLogRoot.directoryAudits = n.getCollectionOfObjectValues<DirectoryAudit>(createDirectoryAuditFromDiscriminatorValue); },
        "provisioning": n => { auditLogRoot.provisioning = n.getCollectionOfObjectValues<ProvisioningObjectSummary>(createProvisioningObjectSummaryFromDiscriminatorValue); },
        "signIns": n => { auditLogRoot.signIns = n.getCollectionOfObjectValues<SignIn>(createSignInFromDiscriminatorValue); },
    }
}
