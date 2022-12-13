import {createHuntingRowResultFromDiscriminatorValue} from './createHuntingRowResultFromDiscriminatorValue';
import {createSinglePropertySchemaFromDiscriminatorValue} from './createSinglePropertySchemaFromDiscriminatorValue';
import {HuntingRowResult, SinglePropertySchema} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HuntingQueryResults implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The results property */
    private _results?: HuntingRowResult[] | undefined;
    /** The schema property */
    private _schema?: SinglePropertySchema[] | undefined;
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
     * Instantiates a new huntingQueryResults and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "results": n => { this.results = n.getCollectionOfObjectValues<HuntingRowResult>(createHuntingRowResultFromDiscriminatorValue); },
            "schema": n => { this.schema = n.getCollectionOfObjectValues<SinglePropertySchema>(createSinglePropertySchemaFromDiscriminatorValue); },
        };
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
     * Gets the results property value. The results property
     * @returns a huntingRowResult
     */
    public get results() {
        return this._results;
    };
    /**
     * Sets the results property value. The results property
     * @param value Value to set for the results property.
     */
    public set results(value: HuntingRowResult[] | undefined) {
        this._results = value;
    };
    /**
     * Gets the schema property value. The schema property
     * @returns a singlePropertySchema
     */
    public get schema() {
        return this._schema;
    };
    /**
     * Sets the schema property value. The schema property
     * @param value Value to set for the schema property.
     */
    public set schema(value: SinglePropertySchema[] | undefined) {
        this._schema = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<HuntingRowResult>("results", this.results);
        writer.writeCollectionOfObjectValues<SinglePropertySchema>("schema", this.schema);
        writer.writeAdditionalData(this.additionalData);
    };
}
