import {createUnifiedRoleFromDiscriminatorValue} from './createUnifiedRoleFromDiscriminatorValue';
import {UnifiedRole} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DelegatedAdminAccessDetails implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The directory roles that the Microsoft partner is assigned in the customer tenant. */
    private _unifiedRoles?: UnifiedRole[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new delegatedAdminAccessDetails and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "unifiedRoles": n => { this.unifiedRoles = n.getCollectionOfObjectValues<UnifiedRole>(createUnifiedRoleFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<UnifiedRole>("unifiedRoles", this.unifiedRoles);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the unifiedRoles property value. The directory roles that the Microsoft partner is assigned in the customer tenant.
     * @returns a unifiedRole
     */
    public get unifiedRoles() {
        return this._unifiedRoles;
    };
    /**
     * Sets the unifiedRoles property value. The directory roles that the Microsoft partner is assigned in the customer tenant.
     * @param value Value to set for the unifiedRoles property.
     */
    public set unifiedRoles(value: UnifiedRole[] | undefined) {
        this._unifiedRoles = value;
    };
}
