import {EducationGender} from './educationGender';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationStudent implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Birth date of the student. */
    private _birthDate?: DateOnly | undefined;
    /** ID of the student in the source system. */
    private _externalId?: string | undefined;
    /** The possible values are: female, male, other, unknownFutureValue. */
    private _gender?: EducationGender | undefined;
    /** Current grade level of the student. */
    private _grade?: string | undefined;
    /** Year the student is graduating from the school. */
    private _graduationYear?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Student Number. */
    private _studentNumber?: string | undefined;
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
     * Gets the birthDate property value. Birth date of the student.
     * @returns a DateOnly
     */
    public get birthDate() {
        return this._birthDate;
    };
    /**
     * Sets the birthDate property value. Birth date of the student.
     * @param value Value to set for the birthDate property.
     */
    public set birthDate(value: DateOnly | undefined) {
        this._birthDate = value;
    };
    /**
     * Instantiates a new educationStudent and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.educationStudent";
    };
    /**
     * Gets the externalId property value. ID of the student in the source system.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. ID of the student in the source system.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * Gets the gender property value. The possible values are: female, male, other, unknownFutureValue.
     * @returns a educationGender
     */
    public get gender() {
        return this._gender;
    };
    /**
     * Sets the gender property value. The possible values are: female, male, other, unknownFutureValue.
     * @param value Value to set for the gender property.
     */
    public set gender(value: EducationGender | undefined) {
        this._gender = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "birthDate": n => { this.birthDate = n.getDateOnlyValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "gender": n => { this.gender = n.getEnumValue<EducationGender>(EducationGender); },
            "grade": n => { this.grade = n.getStringValue(); },
            "graduationYear": n => { this.graduationYear = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "studentNumber": n => { this.studentNumber = n.getStringValue(); },
        };
    };
    /**
     * Gets the grade property value. Current grade level of the student.
     * @returns a string
     */
    public get grade() {
        return this._grade;
    };
    /**
     * Sets the grade property value. Current grade level of the student.
     * @param value Value to set for the grade property.
     */
    public set grade(value: string | undefined) {
        this._grade = value;
    };
    /**
     * Gets the graduationYear property value. Year the student is graduating from the school.
     * @returns a string
     */
    public get graduationYear() {
        return this._graduationYear;
    };
    /**
     * Sets the graduationYear property value. Year the student is graduating from the school.
     * @param value Value to set for the graduationYear property.
     */
    public set graduationYear(value: string | undefined) {
        this._graduationYear = value;
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
        writer.writeDateOnlyValue("birthDate", this.birthDate);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeEnumValue<EducationGender>("gender", this.gender);
        writer.writeStringValue("grade", this.grade);
        writer.writeStringValue("graduationYear", this.graduationYear);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("studentNumber", this.studentNumber);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the studentNumber property value. Student Number.
     * @returns a string
     */
    public get studentNumber() {
        return this._studentNumber;
    };
    /**
     * Sets the studentNumber property value. Student Number.
     * @param value Value to set for the studentNumber property.
     */
    public set studentNumber(value: string | undefined) {
        this._studentNumber = value;
    };
}
