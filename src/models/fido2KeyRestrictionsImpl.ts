import {Fido2KeyRestrictions} from './fido2KeyRestrictions';
import {Fido2RestrictionEnforcementType} from './fido2RestrictionEnforcementType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Fido2KeyRestrictionsImpl implements Fido2KeyRestrictions {
    /** A collection of Authenticator Attestation GUIDs. AADGUIDs define key types and manufacturers. */
    public aaGuids?: string[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Enforcement type. Possible values are: allow, block. */
    public enforcementType?: Fido2RestrictionEnforcementType | undefined;
    /** Determines if the configured key enforcement is enabled. */
    public isEnforced?: boolean | undefined;
    /**
     * Instantiates a new fido2KeyRestrictions and sets the default values.
     * @param fido2KeyRestrictionsParameterValue 
     */
    public constructor(fido2KeyRestrictionsParameterValue?: Fido2KeyRestrictions | undefined) {
        this.aaGuids = fido2KeyRestrictionsParameterValue?.aaGuids;
        this.additionalData = fido2KeyRestrictionsParameterValue?.additionalData ? fido2KeyRestrictionsParameterValue?.additionalData! : {};
        this.enforcementType = fido2KeyRestrictionsParameterValue?.enforcementType;
        this.isEnforced = fido2KeyRestrictionsParameterValue?.isEnforced;
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
