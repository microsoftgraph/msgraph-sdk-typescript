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
export class AuditLogRootImpl extends EntityImpl implements AuditLogRoot {
    /** The directoryAudits property */
    private _directoryAudits?: DirectoryAudit[] | undefined;
    /** The provisioning property */
    private _provisioning?: ProvisioningObjectSummary[] | undefined;
    /** The restrictedSignIns property */
    private _restrictedSignIns?: RestrictedSignIn[] | undefined;
    /** The signIns property */
    private _signIns?: SignIn[] | undefined;
    /**
     * Instantiates a new auditLogRoot and sets the default values.
     * @param auditLogRootParameterValue 
     */
    public constructor(auditLogRootParameterValue?: AuditLogRoot | undefined) {
        super(auditLogRootParameterValue);
        this._directoryAudits = auditLogRootParameterValue?.directoryAudits;
        this._provisioning = auditLogRootParameterValue?.provisioning;
        this._restrictedSignIns = auditLogRootParameterValue?.restrictedSignIns;
        this._signIns = auditLogRootParameterValue?.signIns;
    };
    /**
     * Gets the directoryAudits property value. The directoryAudits property
     * @returns a DirectoryAuditInterface
     */
    public get directoryAudits() {
        return this._directoryAudits;
    };
    /**
     * Sets the directoryAudits property value. The directoryAudits property
     * @param value Value to set for the directoryAudits property.
     */
    public set directoryAudits(value: DirectoryAudit[] | undefined) {
        if(value) {
            const directoryAuditsArrValue: DirectoryAuditImpl[] = [];
            this.directoryAudits?.forEach(element => {
                directoryAuditsArrValue.push((element instanceof DirectoryAuditImpl? element:new DirectoryAuditImpl(element)));
            });
            this._directoryAudits = directoryAuditsArrValue;
        }
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
     * Gets the provisioning property value. The provisioning property
     * @returns a ProvisioningObjectSummaryInterface
     */
    public get provisioning() {
        return this._provisioning;
    };
    /**
     * Sets the provisioning property value. The provisioning property
     * @param value Value to set for the provisioning property.
     */
    public set provisioning(value: ProvisioningObjectSummary[] | undefined) {
        if(value) {
            const provisioningArrValue: ProvisioningObjectSummaryImpl[] = [];
            this.provisioning?.forEach(element => {
                provisioningArrValue.push((element instanceof ProvisioningObjectSummaryImpl? element:new ProvisioningObjectSummaryImpl(element)));
            });
            this._provisioning = provisioningArrValue;
        }
    };
    /**
     * Gets the restrictedSignIns property value. The restrictedSignIns property
     * @returns a RestrictedSignInInterface
     */
    public get restrictedSignIns() {
        return this._restrictedSignIns;
    };
    /**
     * Sets the restrictedSignIns property value. The restrictedSignIns property
     * @param value Value to set for the restrictedSignIns property.
     */
    public set restrictedSignIns(value: RestrictedSignIn[] | undefined) {
        if(value) {
            const restrictedSignInsArrValue: RestrictedSignInImpl[] = [];
            this.restrictedSignIns?.forEach(element => {
                restrictedSignInsArrValue.push((element instanceof RestrictedSignInImpl? element:new RestrictedSignInImpl(element)));
            });
            this._restrictedSignIns = restrictedSignInsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.directoryAudits && this.directoryAudits.length != 0){        const directoryAuditsArrValue: DirectoryAuditImpl[] = [];
        this.directoryAudits?.forEach(element => {
            directoryAuditsArrValue.push((element instanceof DirectoryAuditImpl? element:new DirectoryAuditImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryAuditImpl>("directoryAudits", directoryAuditsArrValue);
        }
        if(this.provisioning && this.provisioning.length != 0){        const provisioningArrValue: ProvisioningObjectSummaryImpl[] = [];
        this.provisioning?.forEach(element => {
            provisioningArrValue.push((element instanceof ProvisioningObjectSummaryImpl? element:new ProvisioningObjectSummaryImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ProvisioningObjectSummaryImpl>("provisioning", provisioningArrValue);
        }
        if(this.restrictedSignIns && this.restrictedSignIns.length != 0){        const restrictedSignInsArrValue: RestrictedSignInImpl[] = [];
        this.restrictedSignIns?.forEach(element => {
            restrictedSignInsArrValue.push((element instanceof RestrictedSignInImpl? element:new RestrictedSignInImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RestrictedSignInImpl>("restrictedSignIns", restrictedSignInsArrValue);
        }
        if(this.signIns && this.signIns.length != 0){        const signInsArrValue: SignInImpl[] = [];
        this.signIns?.forEach(element => {
            signInsArrValue.push((element instanceof SignInImpl? element:new SignInImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SignInImpl>("signIns", signInsArrValue);
        }
    };
    /**
     * Gets the signIns property value. The signIns property
     * @returns a SignInInterface
     */
    public get signIns() {
        return this._signIns;
    };
    /**
     * Sets the signIns property value. The signIns property
     * @param value Value to set for the signIns property.
     */
    public set signIns(value: SignIn[] | undefined) {
        if(value) {
            const signInsArrValue: SignInImpl[] = [];
            this.signIns?.forEach(element => {
                signInsArrValue.push((element instanceof SignInImpl? element:new SignInImpl(element)));
            });
            this._signIns = signInsArrValue;
        }
    };
}
