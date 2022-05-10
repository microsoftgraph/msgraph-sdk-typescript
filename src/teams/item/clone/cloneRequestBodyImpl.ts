import {ClonableTeamParts} from '../../../models/clonableTeamParts';
import {TeamVisibilityType} from '../../../models/teamVisibilityType';
import {CloneRequestBody} from './cloneRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the clone method.  */
export class CloneRequestBodyImpl implements AdditionalDataHolder, CloneRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The classification property  */
    classification?: string | undefined;
    /** The description property  */
    description?: string | undefined;
    /** The displayName property  */
    displayName?: string | undefined;
    /** The mailNickname property  */
    mailNickname?: string | undefined;
    /** The partsToClone property  */
    partsToClone?: ClonableTeamParts | undefined;
    /** The visibility property  */
    visibility?: TeamVisibilityType | undefined;
    /**
     * Instantiates a new cloneRequestBody and sets the default values.
     * @param cloneRequestBodyParameterValue 
     */
    public constructor(cloneRequestBodyParameterValue?: CloneRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = cloneRequestBodyParameterValue?.additionalData ? {} : cloneRequestBodyParameterValue?.additionalData!
        this.classification = cloneRequestBodyParameterValue?.classification ;
        this.description = cloneRequestBodyParameterValue?.description ;
        this.displayName = cloneRequestBodyParameterValue?.displayName ;
        this.mailNickname = cloneRequestBodyParameterValue?.mailNickname ;
        this.partsToClone = cloneRequestBodyParameterValue?.partsToClone ;
        this.visibility = cloneRequestBodyParameterValue?.visibility ;
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
        if(this.classification)
        writer.writeStringValue("classification", this.classification);
        }
        if(this.description){
        if(this.description)
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.mailNickname){
        if(this.mailNickname)
        writer.writeStringValue("mailNickname", this.mailNickname);
        }
        if(this.partsToClone){
        if(this.partsToClone)
        writer.writeEnumValue<ClonableTeamParts>("partsToClone", this.partsToClone);
        }
        if(this.visibility){
        if(this.visibility)
        writer.writeEnumValue<TeamVisibilityType>("visibility", this.visibility);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
