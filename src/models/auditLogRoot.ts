import {DirectoryAudit} from './directoryAudit';
import {Entity} from './entity';
import {ProvisioningObjectSummary} from './provisioningObjectSummary';
import {RestrictedSignIn} from './restrictedSignIn';
import {SignIn} from './signIn';

export interface AuditLogRoot extends Entity{
    /** Read-only. Nullable. */
    directoryAudits?:DirectoryAudit[] | undefined;
    /** The provisioning property */
    provisioning?:ProvisioningObjectSummary[] | undefined;
    /** The restrictedSignIns property */
    restrictedSignIns?:RestrictedSignIn[] | undefined;
    /** Read-only. Nullable. */
    signIns?:SignIn[] | undefined;
}
