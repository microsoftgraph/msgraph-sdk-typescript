import {ExchangeIdFormat} from '../../models/exchangeIdFormat';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the translateExchangeIds method.
 */
export class TranslateExchangeIdsPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The InputIds property */
    private _inputIds?: string[] | undefined;
    /** The SourceIdType property */
    private _sourceIdType?: ExchangeIdFormat | undefined;
    /** The TargetIdType property */
    private _targetIdType?: ExchangeIdFormat | undefined;
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
     * Instantiates a new translateExchangeIdsPostRequestBody and sets the default values.
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
            "inputIds": n => { this.inputIds = n.getCollectionOfPrimitiveValues<string>(); },
            "sourceIdType": n => { this.sourceIdType = n.getEnumValue<ExchangeIdFormat>(ExchangeIdFormat); },
            "targetIdType": n => { this.targetIdType = n.getEnumValue<ExchangeIdFormat>(ExchangeIdFormat); },
        };
    };
    /**
     * Gets the inputIds property value. The InputIds property
     * @returns a string
     */
    public get inputIds() {
        return this._inputIds;
    };
    /**
     * Sets the inputIds property value. The InputIds property
     * @param value Value to set for the InputIds property.
     */
    public set inputIds(value: string[] | undefined) {
        this._inputIds = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("inputIds", this.inputIds);
        writer.writeEnumValue<ExchangeIdFormat>("sourceIdType", this.sourceIdType);
        writer.writeEnumValue<ExchangeIdFormat>("targetIdType", this.targetIdType);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceIdType property value. The SourceIdType property
     * @returns a exchangeIdFormat
     */
    public get sourceIdType() {
        return this._sourceIdType;
    };
    /**
     * Sets the sourceIdType property value. The SourceIdType property
     * @param value Value to set for the SourceIdType property.
     */
    public set sourceIdType(value: ExchangeIdFormat | undefined) {
        this._sourceIdType = value;
    };
    /**
     * Gets the targetIdType property value. The TargetIdType property
     * @returns a exchangeIdFormat
     */
    public get targetIdType() {
        return this._targetIdType;
    };
    /**
     * Sets the targetIdType property value. The TargetIdType property
     * @param value Value to set for the TargetIdType property.
     */
    public set targetIdType(value: ExchangeIdFormat | undefined) {
        this._targetIdType = value;
    };
}
