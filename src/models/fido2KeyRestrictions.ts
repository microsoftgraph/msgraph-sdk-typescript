import {Fido2RestrictionEnforcementType} from './fido2RestrictionEnforcementType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Fido2KeyRestrictions implements AdditionalDataHolder, Parsable {
    /** A collection of Authenticator Attestation GUIDs. AADGUIDs define key types and manufacturers. */
    private _aaGuids?: string[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Enforcement type. Possible values are: allow, block. */
    private _enforcementType?: Fido2RestrictionEnforcementType | undefined;
    /** Determines if the configured key enforcement is enabled. */
    private _isEnforced?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the aaGuids property value. A collection of Authenticator Attestation GUIDs. AADGUIDs define key types and manufacturers.
     * @returns a string
     */
    public get aaGuids() {
        return this._aaGuids;
    };
    /**
     * Sets the aaGuids property value. A collection of Authenticator Attestation GUIDs. AADGUIDs define key types and manufacturers.
     * @param value Value to set for the aaGuids property.
     */
    public set aaGuids(value: string[] | undefined) {
        this._aaGuids = value;
    };
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
     * Instantiates a new fido2KeyRestrictions and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.fido2KeyRestrictions";
    };
    /**
     * Gets the enforcementType property value. Enforcement type. Possible values are: allow, block.
     * @returns a fido2RestrictionEnforcementType
     */
    public get enforcementType() {
        return this._enforcementType;
    };
    /**
     * Sets the enforcementType property value. Enforcement type. Possible values are: allow, block.
     * @param value Value to set for the enforcementType property.
     */
    public set enforcementType(value: Fido2RestrictionEnforcementType | undefined) {
        this._enforcementType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "aaGuids": n => { this.aaGuids = n.getCollectionOfPrimitiveValues<string>(); },
            "enforcementType": n => { this.enforcementType = n.getEnumValue<Fido2RestrictionEnforcementType>(Fido2RestrictionEnforcementType); },
            "isEnforced": n => { this.isEnforced = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the isEnforced property value. Determines if the configured key enforcement is enabled.
     * @returns a boolean
     */
    public get isEnforced() {
        return this._isEnforced;
    };
    /**
     * Sets the isEnforced property value. Determines if the configured key enforcement is enabled.
     * @param value Value to set for the isEnforced property.
     */
    public set isEnforced(value: boolean | undefined) {
        this._isEnforced = value;
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
        writer.writeCollectionOfPrimitiveValues<string>("aaGuids", this.aaGuids);
        writer.writeEnumValue<Fido2RestrictionEnforcementType>("enforcementType", this.enforcementType);
        writer.writeBooleanValue("isEnforced", this.isEnforced);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
