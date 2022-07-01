import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {KeyValuePairImpl} from './index';
import {KeyValuePair} from './keyValuePair';
import {SubjectRightsRequestDetail} from './subjectRightsRequestDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubjectRightsRequestDetailImpl implements SubjectRightsRequestDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new subjectRightsRequestDetail and sets the default values.
     * @param subjectRightsRequestDetailParameterValue 
     */
    public constructor(subjectRightsRequestDetailParameterValue?: SubjectRightsRequestDetail | undefined) {
        this._additionalData = subjectRightsRequestDetailParameterValue?.additionalData ? subjectRightsRequestDetailParameterValue?.additionalData! : {};
        this._excludedItemCount = subjectRightsRequestDetailParameterValue?.excludedItemCount;
        this._insightCounts = subjectRightsRequestDetailParameterValue?.insightCounts;
        this._itemCount = subjectRightsRequestDetailParameterValue?.itemCount;
        this._itemNeedReview = subjectRightsRequestDetailParameterValue?.itemNeedReview;
        this._productItemCounts = subjectRightsRequestDetailParameterValue?.productItemCounts;
        this._signedOffItemCount = subjectRightsRequestDetailParameterValue?.signedOffItemCount;
        this._totalItemSize = subjectRightsRequestDetailParameterValue?.totalItemSize;
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
        if(value) {
            this._excludedItemCount = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludedItemCount": n => { this.excludedItemCount = n.getNumberValue(); },
            "insightCounts": n => { this.insightCounts = n.getCollectionOfObjectValues<KeyValuePairImpl>(createKeyValuePairFromDiscriminatorValue); },
            "itemCount": n => { this.itemCount = n.getNumberValue(); },
            "itemNeedReview": n => { this.itemNeedReview = n.getNumberValue(); },
            "productItemCounts": n => { this.productItemCounts = n.getCollectionOfObjectValues<KeyValuePairImpl>(createKeyValuePairFromDiscriminatorValue); },
            "signedOffItemCount": n => { this.signedOffItemCount = n.getNumberValue(); },
            "totalItemSize": n => { this.totalItemSize = n.getNumberValue(); },
        };
    };
    /**
     * Gets the insightCounts property value. Count of items per insight.
     * @returns a KeyValuePairInterface
     */
    public get insightCounts() {
        return this._insightCounts;
    };
    /**
     * Sets the insightCounts property value. Count of items per insight.
     * @param value Value to set for the insightCounts property.
     */
    public set insightCounts(value: KeyValuePair[] | undefined) {
        if(value) {
            const insightCountsArrValue: KeyValuePairImpl[] = [];
            this.insightCounts?.forEach(element => {
                insightCountsArrValue.push((element instanceof KeyValuePairImpl? element:new KeyValuePairImpl(element)));
            });
            this._insightCounts = insightCountsArrValue;
        }
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
        if(value) {
            this._itemCount = value;
        }
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
        if(value) {
            this._itemNeedReview = value;
        }
    };
    /**
     * Gets the productItemCounts property value. Count of items per product, such as Exchange, SharePoint, OneDrive, and Teams.
     * @returns a KeyValuePairInterface
     */
    public get productItemCounts() {
        return this._productItemCounts;
    };
    /**
     * Sets the productItemCounts property value. Count of items per product, such as Exchange, SharePoint, OneDrive, and Teams.
     * @param value Value to set for the productItemCounts property.
     */
    public set productItemCounts(value: KeyValuePair[] | undefined) {
        if(value) {
            const productItemCountsArrValue: KeyValuePairImpl[] = [];
            this.productItemCounts?.forEach(element => {
                productItemCountsArrValue.push((element instanceof KeyValuePairImpl? element:new KeyValuePairImpl(element)));
            });
            this._productItemCounts = productItemCountsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.excludedItemCount){
            writer.writeNumberValue("excludedItemCount", this.excludedItemCount);
        }
        if(this.insightCounts && this.insightCounts.length != 0){        const insightCountsArrValue: KeyValuePairImpl[] = [];
        this.insightCounts?.forEach(element => {
            insightCountsArrValue.push((element instanceof KeyValuePairImpl? element:new KeyValuePairImpl(element)));
        });
            writer.writeCollectionOfObjectValues<KeyValuePairImpl>("insightCounts", insightCountsArrValue);
        }
        if(this.itemCount){
            writer.writeNumberValue("itemCount", this.itemCount);
        }
        if(this.itemNeedReview){
            writer.writeNumberValue("itemNeedReview", this.itemNeedReview);
        }
        if(this.productItemCounts && this.productItemCounts.length != 0){        const productItemCountsArrValue: KeyValuePairImpl[] = [];
        this.productItemCounts?.forEach(element => {
            productItemCountsArrValue.push((element instanceof KeyValuePairImpl? element:new KeyValuePairImpl(element)));
        });
            writer.writeCollectionOfObjectValues<KeyValuePairImpl>("productItemCounts", productItemCountsArrValue);
        }
        if(this.signedOffItemCount){
            writer.writeNumberValue("signedOffItemCount", this.signedOffItemCount);
        }
        if(this.totalItemSize){
            writer.writeNumberValue("totalItemSize", this.totalItemSize);
        }
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
        if(value) {
            this._signedOffItemCount = value;
        }
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
        if(value) {
            this._totalItemSize = value;
        }
    };
}
