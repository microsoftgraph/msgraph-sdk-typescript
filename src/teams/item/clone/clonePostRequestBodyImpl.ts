import {ClonableTeamParts} from '../../../models/clonableTeamParts';
import {TeamVisibilityType} from '../../../models/teamVisibilityType';
import {ClonePostRequestBody} from './clonePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the clone method. */
export class ClonePostRequestBodyImpl implements AdditionalDataHolder, ClonePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The classification property */
    public classification?: string | undefined;
    /** The description property */
    public description?: string | undefined;
    /** The displayName property */
    public displayName?: string | undefined;
    /** The mailNickname property */
    public mailNickname?: string | undefined;
    /** The partsToClone property */
    public partsToClone?: ClonableTeamParts | undefined;
    /** The visibility property */
    public visibility?: TeamVisibilityType | undefined;
    /**
     * Instantiates a new clonePostRequestBody and sets the default values.
     * @param clonePostRequestBodyParameterValue 
     */
    public constructor(clonePostRequestBodyParameterValue?: ClonePostRequestBody | undefined) {
        this.additionalData = clonePostRequestBodyParameterValue?.additionalData ? clonePostRequestBodyParameterValue?.additionalData! : {}
        this.classification = clonePostRequestBodyParameterValue?.classification ;
        this.description = clonePostRequestBodyParameterValue?.description ;
        this.displayName = clonePostRequestBodyParameterValue?.displayName ;
        this.mailNickname = clonePostRequestBodyParameterValue?.mailNickname ;
        this.partsToClone = clonePostRequestBodyParameterValue?.partsToClone ;
        this.visibility = clonePostRequestBodyParameterValue?.visibility ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "classification": n => { this.classification = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "mailNickname": n => { this.mailNickname = n.getStringValue(); },
            "partsToClone": n => { this.partsToClone = n.getEnumValue<ClonableTeamParts>(ClonableTeamParts); },
            "visibility": n => { this.visibility = n.getEnumValue<TeamVisibilityType>(TeamVisibilityType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.classification){
        writer.writeStringValue("classification", this.classification);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.mailNickname){
        writer.writeStringValue("mailNickname", this.mailNickname);
        }
        if(this.partsToClone){
        writer.writeEnumValue<ClonableTeamParts>("partsToClone", this.partsToClone);
        }
        if(this.visibility){
        writer.writeEnumValue<TeamVisibilityType>("visibility", this.visibility);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
