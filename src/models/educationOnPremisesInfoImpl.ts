import {EducationOnPremisesInfo} from './educationOnPremisesInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationOnPremisesInfoImpl implements AdditionalDataHolder, EducationOnPremisesInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Unique identifier for the user object in Active Directory. */
    public immutableId?: string | undefined;
    /**
     * Instantiates a new educationOnPremisesInfo and sets the default values.
     * @param educationOnPremisesInfoParameterValue 
     */
    public constructor(educationOnPremisesInfoParameterValue?: EducationOnPremisesInfo | undefined) {
        this.additionalData = educationOnPremisesInfoParameterValue?.additionalData ? educationOnPremisesInfoParameterValue?.additionalData! : {}
        this.immutableId = educationOnPremisesInfoParameterValue?.immutableId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "immutableId": n => { this.immutableId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.immutableId){
        writer.writeStringValue("immutableId", this.immutableId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
