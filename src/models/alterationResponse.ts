import {createSearchAlterationFromDiscriminatorValue} from './createSearchAlterationFromDiscriminatorValue';
import {SearchAlteration} from './index';
import {SearchAlterationType} from './searchAlterationType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlterationResponse implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Defines the original user query string. */
    private _originalQueryString?: string | undefined;
    /** Defines the details of the alteration information for the spelling correction. */
    private _queryAlteration?: SearchAlteration | undefined;
    /** Defines the type of the spelling correction. Possible values are: suggestion, modification. */
    private _queryAlterationType?: SearchAlterationType | undefined;
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
     * Instantiates a new alterationResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.alterationResponse";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "originalQueryString": n => { this.originalQueryString = n.getStringValue(); },
            "queryAlteration": n => { this.queryAlteration = n.getObjectValue<SearchAlteration>(createSearchAlterationFromDiscriminatorValue); },
            "queryAlterationType": n => { this.queryAlterationType = n.getEnumValue<SearchAlterationType>(SearchAlterationType); },
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
     * Gets the originalQueryString property value. Defines the original user query string.
     * @returns a string
     */
    public get originalQueryString() {
        return this._originalQueryString;
    };
    /**
     * Sets the originalQueryString property value. Defines the original user query string.
     * @param value Value to set for the originalQueryString property.
     */
    public set originalQueryString(value: string | undefined) {
        this._originalQueryString = value;
    };
    /**
     * Gets the queryAlteration property value. Defines the details of the alteration information for the spelling correction.
     * @returns a searchAlteration
     */
    public get queryAlteration() {
        return this._queryAlteration;
    };
    /**
     * Sets the queryAlteration property value. Defines the details of the alteration information for the spelling correction.
     * @param value Value to set for the queryAlteration property.
     */
    public set queryAlteration(value: SearchAlteration | undefined) {
        this._queryAlteration = value;
    };
    /**
     * Gets the queryAlterationType property value. Defines the type of the spelling correction. Possible values are: suggestion, modification.
     * @returns a searchAlterationType
     */
    public get queryAlterationType() {
        return this._queryAlterationType;
    };
    /**
     * Sets the queryAlterationType property value. Defines the type of the spelling correction. Possible values are: suggestion, modification.
     * @param value Value to set for the queryAlterationType property.
     */
    public set queryAlterationType(value: SearchAlterationType | undefined) {
        this._queryAlterationType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("originalQueryString", this.originalQueryString);
        writer.writeObjectValue<SearchAlteration>("queryAlteration", this.queryAlteration);
        writer.writeEnumValue<SearchAlterationType>("queryAlterationType", this.queryAlterationType);
        writer.writeAdditionalData(this.additionalData);
    };
}
