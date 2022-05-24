import {OptionalClaim} from './optionalClaim';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OptionalClaimImpl implements AdditionalDataHolder, OptionalClaim, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Additional properties of the claim. If a property exists in this collection, it modifies the behavior of the optional claim specified in the name property. */
    public additionalProperties?: string[] | undefined;
    /** If the value is true, the claim specified by the client is necessary to ensure a smooth authorization experience for the specific task requested by the end user. The default value is false. */
    public essential?: boolean | undefined;
    /** The name of the optional claim. */
    public name?: string | undefined;
    /** The source (directory object) of the claim. There are predefined claims and user-defined claims from extension properties. If the source value is null, the claim is a predefined optional claim. If the source value is user, the value in the name property is the extension property from the user object. */
    public source?: string | undefined;
    /**
     * Instantiates a new optionalClaim and sets the default values.
     * @param optionalClaimParameterValue 
     */
    public constructor(optionalClaimParameterValue?: OptionalClaim | undefined) {
        this.additionalData = optionalClaimParameterValue?.additionalData ? optionalClaimParameterValue?.additionalData! : {}
        this.additionalProperties = optionalClaimParameterValue?.additionalProperties ;
        this.essential = optionalClaimParameterValue?.essential ;
        this.name = optionalClaimParameterValue?.name ;
        this.source = optionalClaimParameterValue?.source ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "additionalProperties": n => { this.additionalProperties = n.getCollectionOfPrimitiveValues<string>(); },
            "essential": n => { this.essential = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "source": n => { this.source = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.additionalProperties){
        writer.writeCollectionOfPrimitiveValues<string>("additionalProperties", this.additionalProperties);
        }
        if(this.essential){
        writer.writeBooleanValue("essential", this.essential);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.source){
        writer.writeStringValue("source", this.source);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
