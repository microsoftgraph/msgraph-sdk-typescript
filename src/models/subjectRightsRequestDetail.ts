import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {KeyValuePair} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubjectRightsRequestDetail implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Count of items that are excluded from the request. */
    private _excludedItemCount?: number | undefined;
    /** Count of items per insight. */
    private _insightCounts?: KeyValuePair[] | undefined;
    /** Count of items found. */
    private _itemCount?: number | undefined;
    /** Count of item that need review. */
    private _itemNeedReview?: number | undefined;
    /** Count of items per product, such as Exchange, SharePoint, OneDrive, and Teams. */
    private _productItemCounts?: KeyValuePair[] | undefined;
    /** Count of items signed off by the administrator. */
    private _signedOffItemCount?: number | undefined;
    /** Total item size in bytes. */
    private _totalItemSize?: number | undefined;
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
     * Instantiates a new subjectRightsRequestDetail and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the excludedItemCount property value. Count of items that are excluded from the request.
     * @returns a int64
     */
    public get excludedItemCount() {
        return this._excludedItemCount;
    };
    /**
     * Sets the excludedItemCount property value. Count of items that are excluded from the request.
     * @param value Value to set for the excludedItemCount property.
     */
    public set excludedItemCount(value: number | undefined) {
        this._excludedItemCount = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludedItemCount": n => { this.excludedItemCount = n.getNumberValue(); },
            "insightCounts": n => { this.insightCounts = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
            "itemCount": n => { this.itemCount = n.getNumberValue(); },
            "itemNeedReview": n => { this.itemNeedReview = n.getNumberValue(); },
            "productItemCounts": n => { this.productItemCounts = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
            "signedOffItemCount": n => { this.signedOffItemCount = n.getNumberValue(); },
            "totalItemSize": n => { this.totalItemSize = n.getNumberValue(); },
        };
    };
    /**
     * Gets the insightCounts property value. Count of items per insight.
     * @returns a keyValuePair
     */
    public get insightCounts() {
        return this._insightCounts;
    };
    /**
     * Sets the insightCounts property value. Count of items per insight.
     * @param value Value to set for the insightCounts property.
     */
    public set insightCounts(value: KeyValuePair[] | undefined) {
        this._insightCounts = value;
    };
    /**
     * Gets the itemCount property value. Count of items found.
     * @returns a int64
     */
    public get itemCount() {
        return this._itemCount;
    };
    /**
     * Sets the itemCount property value. Count of items found.
     * @param value Value to set for the itemCount property.
     */
    public set itemCount(value: number | undefined) {
        this._itemCount = value;
    };
    /**
     * Gets the itemNeedReview property value. Count of item that need review.
     * @returns a int64
     */
    public get itemNeedReview() {
        return this._itemNeedReview;
    };
    /**
     * Sets the itemNeedReview property value. Count of item that need review.
     * @param value Value to set for the itemNeedReview property.
     */
    public set itemNeedReview(value: number | undefined) {
        this._itemNeedReview = value;
    };
    /**
     * Gets the productItemCounts property value. Count of items per product, such as Exchange, SharePoint, OneDrive, and Teams.
     * @returns a keyValuePair
     */
    public get productItemCounts() {
        return this._productItemCounts;
    };
    /**
     * Sets the productItemCounts property value. Count of items per product, such as Exchange, SharePoint, OneDrive, and Teams.
     * @param value Value to set for the productItemCounts property.
     */
    public set productItemCounts(value: KeyValuePair[] | undefined) {
        this._productItemCounts = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("excludedItemCount", this.excludedItemCount);
        writer.writeCollectionOfObjectValues<KeyValuePair>("insightCounts", this.insightCounts);
        writer.writeNumberValue("itemCount", this.itemCount);
        writer.writeNumberValue("itemNeedReview", this.itemNeedReview);
        writer.writeCollectionOfObjectValues<KeyValuePair>("productItemCounts", this.productItemCounts);
        writer.writeNumberValue("signedOffItemCount", this.signedOffItemCount);
        writer.writeNumberValue("totalItemSize", this.totalItemSize);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the signedOffItemCount property value. Count of items signed off by the administrator.
     * @returns a int64
     */
    public get signedOffItemCount() {
        return this._signedOffItemCount;
    };
    /**
     * Sets the signedOffItemCount property value. Count of items signed off by the administrator.
     * @param value Value to set for the signedOffItemCount property.
     */
    public set signedOffItemCount(value: number | undefined) {
        this._signedOffItemCount = value;
    };
    /**
     * Gets the totalItemSize property value. Total item size in bytes.
     * @returns a int64
     */
    public get totalItemSize() {
        return this._totalItemSize;
    };
    /**
     * Sets the totalItemSize property value. Total item size in bytes.
     * @param value Value to set for the totalItemSize property.
     */
    public set totalItemSize(value: number | undefined) {
        this._totalItemSize = value;
    };
}
