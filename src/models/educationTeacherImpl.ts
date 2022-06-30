import {EducationTeacher} from './educationTeacher';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationTeacherImpl implements EducationTeacher {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Id of the Teacher in external source system. */
    private _externalId?: string | undefined;
    /** Teacher number. */
    private _teacherNumber?: string | undefined;
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
     * Instantiates a new educationTeacher and sets the default values.
     * @param educationTeacherParameterValue 
     */
    public constructor(educationTeacherParameterValue?: EducationTeacher | undefined) {
        this._additionalData = educationTeacherParameterValue?.additionalData ? educationTeacherParameterValue?.additionalData! : {};
        this._externalId = educationTeacherParameterValue?.externalId;
        this._teacherNumber = educationTeacherParameterValue?.teacherNumber;
    };
    /**
     * Gets the externalId property value. Id of the Teacher in external source system.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. Id of the Teacher in external source system.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        if(value) {
            this._externalId = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "externalId": n => { this.externalId = n.getStringValue(); },
            "teacherNumber": n => { this.teacherNumber = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.externalId){
            writer.writeStringValue("externalId", this.externalId);
        }
        if(this.teacherNumber){
            writer.writeStringValue("teacherNumber", this.teacherNumber);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the teacherNumber property value. Teacher number.
     * @returns a string
     */
    public get teacherNumber() {
        return this._teacherNumber;
    };
    /**
     * Sets the teacherNumber property value. Teacher number.
     * @param value Value to set for the teacherNumber property.
     */
    public set teacherNumber(value: string | undefined) {
        if(value) {
            this._teacherNumber = value;
        }
    };
}
