import {AlterationResponse} from './alterationResponse';
import {createSearchAlterationFromDiscriminatorValue} from './createSearchAlterationFromDiscriminatorValue';
import {SearchAlterationImpl} from './index';
import {SearchAlteration} from './searchAlteration';
import {SearchAlterationType} from './searchAlterationType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlterationResponseImpl implements AlterationResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Defines the original user query string. */
    private _originalQueryString?: string | undefined;
    /** Defines the details of alteration information for the spelling correction. */
    private _queryAlteration?: SearchAlteration | undefined;
    /** Defines the type of the spelling correction. Possible values are suggestion, modification. */
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new alterationResponse and sets the default values.
     * @param alterationResponseParameterValue 
     */
    public constructor(alterationResponseParameterValue?: AlterationResponse | undefined) {
        this._additionalData = alterationResponseParameterValue?.additionalData ? alterationResponseParameterValue?.additionalData! : {};
        this._originalQueryString = alterationResponseParameterValue?.originalQueryString;
        this._queryAlteration = alterationResponseParameterValue?.queryAlteration;
        this._queryAlterationType = alterationResponseParameterValue?.queryAlterationType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "originalQueryString": n => { this.originalQueryString = n.getStringValue(); },
            "queryAlteration": n => { this.queryAlteration = n.getObjectValue<SearchAlterationImpl>(createSearchAlterationFromDiscriminatorValue); },
            "queryAlterationType": n => { this.queryAlterationType = n.getEnumValue<SearchAlterationType>(SearchAlterationType); },
        };
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
        if(value) {
            this._originalQueryString = value;
        }
    };
    /**
     * Gets the queryAlteration property value. Defines the details of alteration information for the spelling correction.
     * @returns a SearchAlterationInterface
     */
    public get queryAlteration() {
        return this._queryAlteration;
    };
    /**
     * Sets the queryAlteration property value. Defines the details of alteration information for the spelling correction.
     * @param value Value to set for the queryAlteration property.
     */
    public set queryAlteration(value: SearchAlteration | undefined) {
        if(value) {
            this._queryAlteration = value instanceof SearchAlterationImpl? value : new SearchAlterationImpl(value);
        }
    };
    /**
     * Gets the queryAlterationType property value. Defines the type of the spelling correction. Possible values are suggestion, modification.
     * @returns a searchAlterationType
     */
    public get queryAlterationType() {
        return this._queryAlterationType;
    };
    /**
     * Sets the queryAlterationType property value. Defines the type of the spelling correction. Possible values are suggestion, modification.
     * @param value Value to set for the queryAlterationType property.
     */
    public set queryAlterationType(value: SearchAlterationType | undefined) {
        if(value) {
            this._queryAlterationType = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.originalQueryString){
            writer.writeStringValue("originalQueryString", this.originalQueryString);
        }
        if(this.queryAlteration){
            writer.writeObjectValue<SearchAlterationImpl>("queryAlteration", (!this.queryAlteration || this.queryAlteration instanceof SearchAlterationImpl? this.queryAlteration : new SearchAlterationImpl(this.queryAlteration)));
        }
        if(this.queryAlterationType){
            writer.writeEnumValue<SearchAlterationType>("queryAlterationType", this.queryAlterationType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
