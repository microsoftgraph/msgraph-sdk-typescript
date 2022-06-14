import {createDirectoryAuditFromDiscriminatorValue} from './createDirectoryAuditFromDiscriminatorValue';
import {createProvisioningObjectSummaryFromDiscriminatorValue} from './createProvisioningObjectSummaryFromDiscriminatorValue';
import {createRestrictedSignInFromDiscriminatorValue} from './createRestrictedSignInFromDiscriminatorValue';
import {createSignInFromDiscriminatorValue} from './createSignInFromDiscriminatorValue';
import {DirectoryAudit, Entity, ProvisioningObjectSummary, RestrictedSignIn, SignIn} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class AuditLogRoot extends Entity implements Parsable {
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
     */
    public constructor() {
        super();
    };
    /**
     * Gets the directoryAudits property value. The directoryAudits property
     * @returns a directoryAudit
     */
    public get directoryAudits() {
        return this._directoryAudits;
    };
    /**
     * Sets the directoryAudits property value. The directoryAudits property
     * @param value Value to set for the directoryAudits property.
     */
    public set directoryAudits(value: DirectoryAudit[] | undefined) {
        this._directoryAudits = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "directoryAudits": n => { this.directoryAudits = n.getCollectionOfObjectValues<DirectoryAudit>(createDirectoryAuditFromDiscriminatorValue); },
            "provisioning": n => { this.provisioning = n.getCollectionOfObjectValues<ProvisioningObjectSummary>(createProvisioningObjectSummaryFromDiscriminatorValue); },
            "restrictedSignIns": n => { this.restrictedSignIns = n.getCollectionOfObjectValues<RestrictedSignIn>(createRestrictedSignInFromDiscriminatorValue); },
            "signIns": n => { this.signIns = n.getCollectionOfObjectValues<SignIn>(createSignInFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the provisioning property value. The provisioning property
     * @returns a provisioningObjectSummary
     */
    public get provisioning() {
        return this._provisioning;
    };
    /**
     * Sets the provisioning property value. The provisioning property
     * @param value Value to set for the provisioning property.
     */
    public set provisioning(value: ProvisioningObjectSummary[] | undefined) {
        this._provisioning = value;
    };
    /**
     * Gets the restrictedSignIns property value. The restrictedSignIns property
     * @returns a restrictedSignIn
     */
    public get restrictedSignIns() {
        return this._restrictedSignIns;
    };
    /**
     * Sets the restrictedSignIns property value. The restrictedSignIns property
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
     * Gets the signIns property value. The signIns property
     * @returns a signIn
     */
    public get signIns() {
        return this._signIns;
    };
    /**
     * Sets the signIns property value. The signIns property
     * @param value Value to set for the signIns property.
     */
    public set signIns(value: SignIn[] | undefined) {
        this._signIns = value;
    };
}
