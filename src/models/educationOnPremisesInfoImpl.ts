import {EducationOnPremisesInfo} from './educationOnPremisesInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationOnPremisesInfoImpl implements EducationOnPremisesInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Unique identifier for the user object in Active Directory. */
    private _immutableId?: string | undefined;
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
     * Instantiates a new educationOnPremisesInfo and sets the default values.
     * @param educationOnPremisesInfoParameterValue 
     */
    public constructor(educationOnPremisesInfoParameterValue?: EducationOnPremisesInfo | undefined) {
        this._additionalData = educationOnPremisesInfoParameterValue?.additionalData ? educationOnPremisesInfoParameterValue?.additionalData! : {};
        this._immutableId = educationOnPremisesInfoParameterValue?.immutableId;
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
     * Gets the immutableId property value. Unique identifier for the user object in Active Directory.
     * @returns a string
     */
    public get immutableId() {
        return this._immutableId;
    };
    /**
     * Sets the immutableId property value. Unique identifier for the user object in Active Directory.
     * @param value Value to set for the immutableId property.
     */
    public set immutableId(value: string | undefined) {
        if(value) {
            this._immutableId = value;
        }
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
