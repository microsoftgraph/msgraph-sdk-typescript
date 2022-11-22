import {SelectionLikelihoodInfo} from './selectionLikelihoodInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScoredEmailAddress implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The email address. */
    private _address?: string | undefined;
    /** The itemId property */
    private _itemId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The relevance score of the email address. A relevance score is used as a sort key, in relation to the other returned results. A higher relevance score value corresponds to a more relevant result. Relevance is determined by the user’s communication and collaboration patterns and business relationships. */
    private _relevanceScore?: number | undefined;
    /** The selectionLikelihood property */
    private _selectionLikelihood?: SelectionLikelihoodInfo | undefined;
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
     * Gets the address property value. The email address.
     * @returns a string
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The email address.
     * @param value Value to set for the address property.
     */
    public set address(value: string | undefined) {
        this._address = value;
    };
    /**
     * Instantiates a new scoredEmailAddress and sets the default values.
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
            "address": n => { this.address = n.getStringValue(); },
            "itemId": n => { this.itemId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "relevanceScore": n => { this.relevanceScore = n.getNumberValue(); },
            "selectionLikelihood": n => { this.selectionLikelihood = n.getEnumValue<SelectionLikelihoodInfo>(SelectionLikelihoodInfo); },
        };
    };
    /**
     * Gets the itemId property value. The itemId property
     * @returns a string
     */
    public get itemId() {
        return this._itemId;
    };
    /**
     * Sets the itemId property value. The itemId property
     * @param value Value to set for the itemId property.
     */
    public set itemId(value: string | undefined) {
        this._itemId = value;
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
     * Gets the relevanceScore property value. The relevance score of the email address. A relevance score is used as a sort key, in relation to the other returned results. A higher relevance score value corresponds to a more relevant result. Relevance is determined by the user’s communication and collaboration patterns and business relationships.
     * @returns a double
     */
    public get relevanceScore() {
        return this._relevanceScore;
    };
    /**
     * Sets the relevanceScore property value. The relevance score of the email address. A relevance score is used as a sort key, in relation to the other returned results. A higher relevance score value corresponds to a more relevant result. Relevance is determined by the user’s communication and collaboration patterns and business relationships.
     * @param value Value to set for the relevanceScore property.
     */
    public set relevanceScore(value: number | undefined) {
        this._relevanceScore = value;
    };
    /**
     * Gets the selectionLikelihood property value. The selectionLikelihood property
     * @returns a selectionLikelihoodInfo
     */
    public get selectionLikelihood() {
        return this._selectionLikelihood;
    };
    /**
     * Sets the selectionLikelihood property value. The selectionLikelihood property
     * @param value Value to set for the selectionLikelihood property.
     */
    public set selectionLikelihood(value: SelectionLikelihoodInfo | undefined) {
        this._selectionLikelihood = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("address", this.address);
        writer.writeStringValue("itemId", this.itemId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("relevanceScore", this.relevanceScore);
        writer.writeEnumValue<SelectionLikelihoodInfo>("selectionLikelihood", this.selectionLikelihood);
        writer.writeAdditionalData(this.additionalData);
    };
}
