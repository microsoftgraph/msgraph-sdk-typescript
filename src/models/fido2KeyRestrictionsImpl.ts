import {Fido2KeyRestrictions} from './fido2KeyRestrictions';
import {Fido2RestrictionEnforcementType} from './fido2RestrictionEnforcementType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Fido2KeyRestrictionsImpl implements Fido2KeyRestrictions {
    /** A collection of Authenticator Attestation GUIDs. AADGUIDs define key types and manufacturers. */
    private _aaGuids?: string[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Enforcement type. Possible values are: allow, block. */
    private _enforcementType?: Fido2RestrictionEnforcementType | undefined;
    /** Determines if the configured key enforcement is enabled. */
    private _isEnforced?: boolean | undefined;
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
        if(value) {
            this._aaGuids = value;
        }
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new fido2KeyRestrictions and sets the default values.
     * @param fido2KeyRestrictionsParameterValue 
     */
    public constructor(fido2KeyRestrictionsParameterValue?: Fido2KeyRestrictions | undefined) {
        this._aaGuids = fido2KeyRestrictionsParameterValue?.aaGuids;
        this._additionalData = fido2KeyRestrictionsParameterValue?.additionalData ? fido2KeyRestrictionsParameterValue?.additionalData! : {};
        this._enforcementType = fido2KeyRestrictionsParameterValue?.enforcementType;
        this._isEnforced = fido2KeyRestrictionsParameterValue?.isEnforced;
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
        if(value) {
            this._enforcementType = value;
        }
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
        if(value) {
            this._isEnforced = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.aaGuids){
            writer.writeCollectionOfPrimitiveValues<string>("aaGuids", this.aaGuids);
        }
        if(this.enforcementType){
            writer.writeEnumValue<Fido2RestrictionEnforcementType>("enforcementType", this.enforcementType);
        }
        if(this.isEnforced){
            writer.writeBooleanValue("isEnforced", this.isEnforced);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
