import {DirectoryAudit} from './directoryAudit';
import {Entity} from './entity';
import {ProvisioningObjectSummary} from './provisioningObjectSummary';
import {RestrictedSignIn} from './restrictedSignIn';
import {SignIn} from './signIn';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuditLogRoot extends Entity, Partial<Parsable> {
    /** Read-only. Nullable. */
    directoryAudits?: DirectoryAudit[] | undefined;
    /** The provisioning property */
    provisioning?: ProvisioningObjectSummary[] | undefined;
    /** The restrictedSignIns property */
    restrictedSignIns?: RestrictedSignIn[] | undefined;
    /** Read-only. Nullable. */
    signIns?: SignIn[] | undefined;
}
