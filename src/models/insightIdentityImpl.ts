import {InsightIdentity} from './insightIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InsightIdentityImpl implements AdditionalDataHolder, InsightIdentity, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The email address of the user who shared the item. */
    public address?: string | undefined;
    /** The display name of the user who shared the item. */
    public displayName?: string | undefined;
    /** The id of the user who shared the item. */
    public id?: string | undefined;
    /**
     * Instantiates a new insightIdentity and sets the default values.
     * @param insightIdentityParameterValue 
     */
    public constructor(insightIdentityParameterValue?: InsightIdentity | undefined) {
        this.additionalData = insightIdentityParameterValue?.additionalData ? insightIdentityParameterValue?.additionalData! : {}
        this.address = insightIdentityParameterValue?.address ;
        this.displayName = insightIdentityParameterValue?.displayName ;
        this.id = insightIdentityParameterValue?.id ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "address": n => { this.address = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.address){
        writer.writeStringValue("address", this.address);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
