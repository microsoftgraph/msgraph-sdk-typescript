import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DgetPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The criteria property */
    private _criteria?: Json | undefined;
    /** The database property */
    private _database?: Json | undefined;
    /** The field property */
    private _field?: Json | undefined;
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
     * Instantiates a new dgetPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the criteria property value. The criteria property
     * @returns a Json
     */
    public get criteria() {
        return this._criteria;
    };
    /**
     * Sets the criteria property value. The criteria property
     * @param value Value to set for the criteria property.
     */
    public set criteria(value: Json | undefined) {
        this._criteria = value;
    };
    /**
     * Gets the database property value. The database property
     * @returns a Json
     */
    public get database() {
        return this._database;
    };
    /**
     * Sets the database property value. The database property
     * @param value Value to set for the database property.
     */
    public set database(value: Json | undefined) {
        this._database = value;
    };
    /**
     * Gets the field property value. The field property
     * @returns a Json
     */
    public get field() {
        return this._field;
    };
    /**
     * Sets the field property value. The field property
     * @param value Value to set for the field property.
     */
    public set field(value: Json | undefined) {
        this._field = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "criteria": n => { this.criteria = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "database": n => { this.database = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "field": n => { this.field = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("criteria", this.criteria);
        writer.writeObjectValue<Json>("database", this.database);
        writer.writeObjectValue<Json>("field", this.field);
        writer.writeAdditionalData(this.additionalData);
    };
}
