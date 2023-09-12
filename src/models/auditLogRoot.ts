import { type DirectoryAudit } from './directoryAudit';
import { type Entity } from './entity';
import { type ProvisioningObjectSummary } from './provisioningObjectSummary';
import { type SignIn } from './signIn';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AuditLogRoot extends Entity, Parsable {
    /**
     * The directoryAudits property
     */
    directoryAudits?: DirectoryAudit[] | undefined;
    /**
     * The provisioning property
     */
    provisioning?: ProvisioningObjectSummary[] | undefined;
    /**
     * The signIns property
     */
    signIns?: SignIn[] | undefined;
}
