import {DirectoryAudit} from './directoryAudit';
import {Entity} from './entity';
import {ProvisioningObjectSummary} from './provisioningObjectSummary';
import {RestrictedSignIn} from './restrictedSignIn';
import {SignIn} from './signIn';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuditLogRoot extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The directoryAudits property */
    directoryAudits?: DirectoryAudit[] | undefined;
    /** The provisioning property */
    provisioning?: ProvisioningObjectSummary[] | undefined;
    /** The restrictedSignIns property */
    restrictedSignIns?: RestrictedSignIn[] | undefined;
    /** The signIns property */
    signIns?: SignIn[] | undefined;
}
