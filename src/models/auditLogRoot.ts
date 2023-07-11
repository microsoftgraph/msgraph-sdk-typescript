import {DirectoryAudit} from './directoryAudit';
import {Entity} from './entity';
import {ProvisioningObjectSummary} from './provisioningObjectSummary';
import {SignIn} from './signIn';
import {Parsable} from '@microsoft/kiota-abstractions';

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
