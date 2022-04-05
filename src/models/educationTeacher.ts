import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationTeacher implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** ID of the teacher in the source system.  */
    private _externalId?: string | undefined;
    /** Teacher number.  */
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new educationTeacher and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the externalId property value. ID of the teacher in the source system.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. ID of the teacher in the source system.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "externalId": (o, n) => { (o as unknown as EducationTeacher).externalId = n.getStringValue(); },
            "teacherNumber": (o, n) => { (o as unknown as EducationTeacher).teacherNumber = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("externalId", this.externalId);
        writer.writeStringValue("teacherNumber", this.teacherNumber);
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
        this._teacherNumber = value;
    };
}
