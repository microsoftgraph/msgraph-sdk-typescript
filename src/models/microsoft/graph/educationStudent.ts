import {EducationGender} from './educationGender';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationStudent implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Birth date of the student.  */
    private _birthDate?: string | undefined;
    /** ID of the student in the source system.  */
    private _externalId?: string | undefined;
    /** Possible values are: female, male, other.  */
    private _gender?: EducationGender | undefined;
    /** Current grade level of the student.  */
    private _grade?: string | undefined;
    /** Year the student is graduating from the school.  */
    private _graduationYear?: string | undefined;
    /** Student Number.  */
    private _studentNumber?: string | undefined;
    /**
     * Instantiates a new educationStudent and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the birthDate property value. Birth date of the student.
     * @returns a string
     */
    public get birthDate() {
        return this._birthDate;
    };
    /**
     * Gets the externalId property value. ID of the student in the source system.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Gets the gender property value. Possible values are: female, male, other.
     * @returns a educationGender
     */
    public get gender() {
        return this._gender;
    };
    /**
     * Gets the grade property value. Current grade level of the student.
     * @returns a string
     */
    public get grade() {
        return this._grade;
    };
    /**
     * Gets the graduationYear property value. Year the student is graduating from the school.
     * @returns a string
     */
    public get graduationYear() {
        return this._graduationYear;
    };
    /**
     * Gets the studentNumber property value. Student Number.
     * @returns a string
     */
    public get studentNumber() {
        return this._studentNumber;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["birthDate", (o, n) => { (o as unknown as EducationStudent).birthDate = n.getStringValue(); }],
            ["externalId", (o, n) => { (o as unknown as EducationStudent).externalId = n.getStringValue(); }],
            ["gender", (o, n) => { (o as unknown as EducationStudent).gender = n.getEnumValue<EducationGender>(EducationGender); }],
            ["grade", (o, n) => { (o as unknown as EducationStudent).grade = n.getStringValue(); }],
            ["graduationYear", (o, n) => { (o as unknown as EducationStudent).graduationYear = n.getStringValue(); }],
            ["studentNumber", (o, n) => { (o as unknown as EducationStudent).studentNumber = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("birthDate", this.birthDate);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeEnumValue<EducationGender>("gender", this.gender);
        writer.writeStringValue("grade", this.grade);
        writer.writeStringValue("graduationYear", this.graduationYear);
        writer.writeStringValue("studentNumber", this.studentNumber);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the birthDate property value. Birth date of the student.
     * @param value Value to set for the birthDate property.
     */
    public set birthDate(value: string | undefined) {
        this._birthDate = value;
    };
    /**
     * Sets the externalId property value. ID of the student in the source system.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * Sets the gender property value. Possible values are: female, male, other.
     * @param value Value to set for the gender property.
     */
    public set gender(value: EducationGender | undefined) {
        this._gender = value;
    };
    /**
     * Sets the grade property value. Current grade level of the student.
     * @param value Value to set for the grade property.
     */
    public set grade(value: string | undefined) {
        this._grade = value;
    };
    /**
     * Sets the graduationYear property value. Year the student is graduating from the school.
     * @param value Value to set for the graduationYear property.
     */
    public set graduationYear(value: string | undefined) {
        this._graduationYear = value;
    };
    /**
     * Sets the studentNumber property value. Student Number.
     * @param value Value to set for the studentNumber property.
     */
    public set studentNumber(value: string | undefined) {
        this._studentNumber = value;
    };
}
