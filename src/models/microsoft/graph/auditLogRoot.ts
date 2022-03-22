import {createDirectoryAuditFromDiscriminatorValue} from './createDirectoryAuditFromDiscriminatorValue';
import {createProvisioningObjectSummaryFromDiscriminatorValue} from './createProvisioningObjectSummaryFromDiscriminatorValue';
import {createRestrictedSignInFromDiscriminatorValue} from './createRestrictedSignInFromDiscriminatorValue';
import {createSignInFromDiscriminatorValue} from './createSignInFromDiscriminatorValue';
import {DirectoryAudit, Entity, ProvisioningObjectSummary, RestrictedSignIn, SignIn} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton.  */
export class AuditLogRoot extends Entity implements Parsable {
    /** Read-only. Nullable.  */
    private _directoryAudits?: DirectoryAudit[] | undefined;
    private _provisioning?: ProvisioningObjectSummary[] | undefined;
    private _restrictedSignIns?: RestrictedSignIn[] | undefined;
    /** Read-only. Nullable.  */
    private _signIns?: SignIn[] | undefined;
    /**
     * Instantiates a new auditLogRoot and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the directoryAudits property value. Read-only. Nullable.
     * @returns a directoryAudit
     */
    public get directoryAudits() {
        return this._directoryAudits;
    };
    /**
     * Sets the directoryAudits property value. Read-only. Nullable.
     * @param value Value to set for the directoryAudits property.
     */
    public set directoryAudits(value: DirectoryAudit[] | undefined) {
        this._directoryAudits = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "directoryAudits": (o, n) => { (o as unknown as AuditLogRoot).directoryAudits = n.getCollectionOfObjectValues<DirectoryAudit>(createDirectoryAuditFromDiscriminatorValue); },
            "provisioning": (o, n) => { (o as unknown as AuditLogRoot).provisioning = n.getCollectionOfObjectValues<ProvisioningObjectSummary>(createProvisioningObjectSummaryFromDiscriminatorValue); },
            "restrictedSignIns": (o, n) => { (o as unknown as AuditLogRoot).restrictedSignIns = n.getCollectionOfObjectValues<RestrictedSignIn>(createRestrictedSignInFromDiscriminatorValue); },
            "signIns": (o, n) => { (o as unknown as AuditLogRoot).signIns = n.getCollectionOfObjectValues<SignIn>(createSignInFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the provisioning property value. 
     * @returns a provisioningObjectSummary
     */
    public get provisioning() {
        return this._provisioning;
    };
    /**
     * Sets the provisioning property value. 
     * @param value Value to set for the provisioning property.
     */
    public set provisioning(value: ProvisioningObjectSummary[] | undefined) {
        this._provisioning = value;
    };
    /**
     * Gets the restrictedSignIns property value. 
     * @returns a restrictedSignIn
     */
    public get restrictedSignIns() {
        return this._restrictedSignIns;
    };
    /**
     * Sets the restrictedSignIns property value. 
     * @param value Value to set for the restrictedSignIns property.
     */
    public set restrictedSignIns(value: RestrictedSignIn[] | undefined) {
        this._restrictedSignIns = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DirectoryAudit>("directoryAudits", this.directoryAudits);
        writer.writeCollectionOfObjectValues<ProvisioningObjectSummary>("provisioning", this.provisioning);
        writer.writeCollectionOfObjectValues<RestrictedSignIn>("restrictedSignIns", this.restrictedSignIns);
        writer.writeCollectionOfObjectValues<SignIn>("signIns", this.signIns);
    };
    /**
     * Gets the signIns property value. Read-only. Nullable.
     * @returns a signIn
     */
    public get signIns() {
        return this._signIns;
    };
    /**
     * Sets the signIns property value. Read-only. Nullable.
     * @param value Value to set for the signIns property.
     */
    public set signIns(value: SignIn[] | undefined) {
        this._signIns = value;
    };
}
