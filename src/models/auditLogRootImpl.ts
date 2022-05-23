import {AuditLogRoot} from './auditLogRoot';
import {createDirectoryAuditFromDiscriminatorValue} from './createDirectoryAuditFromDiscriminatorValue';
import {createProvisioningObjectSummaryFromDiscriminatorValue} from './createProvisioningObjectSummaryFromDiscriminatorValue';
import {createRestrictedSignInFromDiscriminatorValue} from './createRestrictedSignInFromDiscriminatorValue';
import {createSignInFromDiscriminatorValue} from './createSignInFromDiscriminatorValue';
import {DirectoryAudit} from './directoryAudit';
import {DirectoryAuditImpl, EntityImpl, ProvisioningObjectSummaryImpl, RestrictedSignInImpl, SignInImpl} from './index';
import {ProvisioningObjectSummary} from './provisioningObjectSummary';
import {RestrictedSignIn} from './restrictedSignIn';
import {SignIn} from './signIn';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class AuditLogRootImpl extends EntityImpl implements AuditLogRoot, Parsable {
    /** Read-only. Nullable. */
    public directoryAudits?: DirectoryAudit[] | undefined;
    /** The provisioning property */
    public provisioning?: ProvisioningObjectSummary[] | undefined;
    /** The restrictedSignIns property */
    public restrictedSignIns?: RestrictedSignIn[] | undefined;
    /** Read-only. Nullable. */
    public signIns?: SignIn[] | undefined;
    /**
     * Instantiates a new auditLogRoot and sets the default values.
     * @param auditLogRootParameterValue 
     */
    public constructor(auditLogRootParameterValue?: AuditLogRoot | undefined) {
        super();
        this.directoryAudits = auditLogRootParameterValue?.directoryAudits ;
        this.provisioning = auditLogRootParameterValue?.provisioning ;
        this.restrictedSignIns = auditLogRootParameterValue?.restrictedSignIns ;
        this.signIns = auditLogRootParameterValue?.signIns ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "directoryAudits": n => { this.directoryAudits = n.getCollectionOfObjectValues<DirectoryAuditImpl>(createDirectoryAuditFromDiscriminatorValue); },
            "provisioning": n => { this.provisioning = n.getCollectionOfObjectValues<ProvisioningObjectSummaryImpl>(createProvisioningObjectSummaryFromDiscriminatorValue); },
            "restrictedSignIns": n => { this.restrictedSignIns = n.getCollectionOfObjectValues<RestrictedSignInImpl>(createRestrictedSignInFromDiscriminatorValue); },
            "signIns": n => { this.signIns = n.getCollectionOfObjectValues<SignInImpl>(createSignInFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.directoryAudits && this.directoryAudits.length != 0){        const directoryAuditsArrValue: DirectoryAuditImpl[] = []; this.directoryAudits?.forEach(element => {directoryAuditsArrValue.push(new DirectoryAuditImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryAuditImpl>("directoryAudits", directoryAuditsArrValue);
        }
        if(this.provisioning && this.provisioning.length != 0){        const provisioningArrValue: ProvisioningObjectSummaryImpl[] = []; this.provisioning?.forEach(element => {provisioningArrValue.push(new ProvisioningObjectSummaryImpl(element));});
        writer.writeCollectionOfObjectValues<ProvisioningObjectSummaryImpl>("provisioning", provisioningArrValue);
        }
        if(this.restrictedSignIns && this.restrictedSignIns.length != 0){        const restrictedSignInsArrValue: RestrictedSignInImpl[] = []; this.restrictedSignIns?.forEach(element => {restrictedSignInsArrValue.push(new RestrictedSignInImpl(element));});
        writer.writeCollectionOfObjectValues<RestrictedSignInImpl>("restrictedSignIns", restrictedSignInsArrValue);
        }
        if(this.signIns && this.signIns.length != 0){        const signInsArrValue: SignInImpl[] = []; this.signIns?.forEach(element => {signInsArrValue.push(new SignInImpl(element));});
        writer.writeCollectionOfObjectValues<SignInImpl>("signIns", signInsArrValue);
        }
    };
}
