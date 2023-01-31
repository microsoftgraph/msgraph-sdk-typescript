import {createDirectoryAuditFromDiscriminatorValue} from './createDirectoryAuditFromDiscriminatorValue';
import {createProvisioningObjectSummaryFromDiscriminatorValue} from './createProvisioningObjectSummaryFromDiscriminatorValue';
import {createSignInFromDiscriminatorValue} from './createSignInFromDiscriminatorValue';
import {DirectoryAudit, Entity, ProvisioningObjectSummary, SignIn} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuditLogRoot extends Entity implements Parsable {
    private _directoryAudits?: DirectoryAudit[] | undefined;
    private _provisioning?: ProvisioningObjectSummary[] | undefined;
    private _signIns?: SignIn[] | undefined;
    /**
     * Instantiates a new AuditLogRoot and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the directoryAudits property value. 
     * @returns a directoryAudit
     */
    public get directoryAudits() {
        return this._directoryAudits;
    };
    /**
     * Sets the directoryAudits property value. 
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
            "signIns": n => { this.signIns = n.getCollectionOfObjectValues<SignIn>(createSignInFromDiscriminatorValue); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DirectoryAudit>("directoryAudits", this.directoryAudits);
        writer.writeCollectionOfObjectValues<ProvisioningObjectSummary>("provisioning", this.provisioning);
        writer.writeCollectionOfObjectValues<SignIn>("signIns", this.signIns);
    };
    /**
     * Gets the signIns property value. 
     * @returns a signIn
     */
    public get signIns() {
        return this._signIns;
    };
    /**
     * Sets the signIns property value. 
     * @param value Value to set for the signIns property.
     */
    public set signIns(value: SignIn[] | undefined) {
        this._signIns = value;
    };
}
