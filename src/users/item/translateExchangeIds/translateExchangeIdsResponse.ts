import {ExchangeIdFormat} from '../../../me/translateExchangeIds/exchangeIdFormat';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class TranslateExchangeIdsResponse implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _inputIds?: string[] | undefined;
    private _sourceIdType?: ExchangeIdFormat | undefined;
    private _targetIdType?: ExchangeIdFormat | undefined;
    /**
     * Instantiates a new translateExchangeIdsResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the InputIds property value. 
     * @returns a string
     */
    public get inputIds() {
        return this._inputIds;
    };
    /**
     * Gets the SourceIdType property value. 
     * @returns a exchangeIdFormat
     */
    public get sourceIdType() {
        return this._sourceIdType;
    };
    /**
     * Gets the TargetIdType property value. 
     * @returns a exchangeIdFormat
     */
    public get targetIdType() {
        return this._targetIdType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["inputIds", (o, n) => { (o as unknown as TranslateExchangeIdsResponse).inputIds = n.getCollectionOfPrimitiveValues<string>(); }],
            ["sourceIdType", (o, n) => { (o as unknown as TranslateExchangeIdsResponse).sourceIdType = n.getEnumValue<ExchangeIdFormat>(ExchangeIdFormat); }],
            ["targetIdType", (o, n) => { (o as unknown as TranslateExchangeIdsResponse).targetIdType = n.getEnumValue<ExchangeIdFormat>(ExchangeIdFormat); }],
        ]);
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
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the InputIds property value. 
     * @param value Value to set for the InputIds property.
     */
    public set inputIds(value: string[] | undefined) {
        this._inputIds = value;
    };
    /**
     * Sets the SourceIdType property value. 
     * @param value Value to set for the SourceIdType property.
     */
    public set sourceIdType(value: ExchangeIdFormat | undefined) {
        this._sourceIdType = value;
    };
    /**
     * Sets the TargetIdType property value. 
     * @param value Value to set for the TargetIdType property.
     */
    public set targetIdType(value: ExchangeIdFormat | undefined) {
        this._targetIdType = value;
    };
}
