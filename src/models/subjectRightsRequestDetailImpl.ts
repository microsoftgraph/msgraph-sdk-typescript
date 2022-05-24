import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {KeyValuePairImpl} from './index';
import {KeyValuePair} from './keyValuePair';
import {SubjectRightsRequestDetail} from './subjectRightsRequestDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubjectRightsRequestDetailImpl implements AdditionalDataHolder, Parsable, SubjectRightsRequestDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Count of items that are excluded from the request. */
    public excludedItemCount?: number | undefined;
    /** Count of items per insight. */
    public insightCounts?: KeyValuePair[] | undefined;
    /** Count of items found. */
    public itemCount?: number | undefined;
    /** Count of item that need review. */
    public itemNeedReview?: number | undefined;
    /** Count of items per product, such as Exchange, SharePoint, OneDrive, and Teams. */
    public productItemCounts?: KeyValuePair[] | undefined;
    /** Count of items signed off by the administrator. */
    public signedOffItemCount?: number | undefined;
    /** Total item size in bytes. */
    public totalItemSize?: number | undefined;
    /**
     * Instantiates a new subjectRightsRequestDetail and sets the default values.
     * @param subjectRightsRequestDetailParameterValue 
     */
    public constructor(subjectRightsRequestDetailParameterValue?: SubjectRightsRequestDetail | undefined) {
        this.additionalData = subjectRightsRequestDetailParameterValue?.additionalData ? subjectRightsRequestDetailParameterValue?.additionalData! : {}
        this.excludedItemCount = subjectRightsRequestDetailParameterValue?.excludedItemCount ;
        this.insightCounts = subjectRightsRequestDetailParameterValue?.insightCounts ;
        this.itemCount = subjectRightsRequestDetailParameterValue?.itemCount ;
        this.itemNeedReview = subjectRightsRequestDetailParameterValue?.itemNeedReview ;
        this.productItemCounts = subjectRightsRequestDetailParameterValue?.productItemCounts ;
        this.signedOffItemCount = subjectRightsRequestDetailParameterValue?.signedOffItemCount ;
        this.totalItemSize = subjectRightsRequestDetailParameterValue?.totalItemSize ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.excludedItemCount){
        writer.writeNumberValue("excludedItemCount", this.excludedItemCount);
        }
        if(this.insightCounts && this.insightCounts.length != 0){        const insightCountsArrValue: KeyValuePairImpl[] = []; this.insightCounts?.forEach(element => {insightCountsArrValue.push(new KeyValuePairImpl(element));});
        writer.writeCollectionOfObjectValues<KeyValuePairImpl>("insightCounts", insightCountsArrValue);
        }
        if(this.itemCount){
        writer.writeNumberValue("itemCount", this.itemCount);
        }
        if(this.itemNeedReview){
        writer.writeNumberValue("itemNeedReview", this.itemNeedReview);
        }
        if(this.productItemCounts && this.productItemCounts.length != 0){        const productItemCountsArrValue: KeyValuePairImpl[] = []; this.productItemCounts?.forEach(element => {productItemCountsArrValue.push(new KeyValuePairImpl(element));});
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
}
