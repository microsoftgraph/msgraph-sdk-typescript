import {GetCachedReportPostRequestBody} from './getCachedReportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getCachedReport method. */
export class GetCachedReportPostRequestBodyImpl implements GetCachedReportPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The groupBy property */
    private _groupBy?: string[] | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The orderBy property */
    private _orderBy?: string[] | undefined;
    /** The search property */
    private _search?: string | undefined;
    /** The select property */
    private _select?: string[] | undefined;
    /** The skip property */
    private _skip?: number | undefined;
    /** The top property */
    private _top?: number | undefined;
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
     * Instantiates a new getCachedReportPostRequestBody and sets the default values.
     * @param getCachedReportPostRequestBodyParameterValue 
     */
    public constructor(getCachedReportPostRequestBodyParameterValue?: GetCachedReportPostRequestBody | undefined) {
        this._additionalData = getCachedReportPostRequestBodyParameterValue?.additionalData ? getCachedReportPostRequestBodyParameterValue?.additionalData! : {};
        this._groupBy = getCachedReportPostRequestBodyParameterValue?.groupBy;
        this._id = getCachedReportPostRequestBodyParameterValue?.id;
        this._orderBy = getCachedReportPostRequestBodyParameterValue?.orderBy;
        this._search = getCachedReportPostRequestBodyParameterValue?.search;
        this._select = getCachedReportPostRequestBodyParameterValue?.select;
        this._skip = getCachedReportPostRequestBodyParameterValue?.skip;
        this._top = getCachedReportPostRequestBodyParameterValue?.top;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "groupBy": n => { this.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
            "id": n => { this.id = n.getStringValue(); },
            "orderBy": n => { this.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
            "search": n => { this.search = n.getStringValue(); },
            "select": n => { this.select = n.getCollectionOfPrimitiveValues<string>(); },
            "skip": n => { this.skip = n.getNumberValue(); },
            "top": n => { this.top = n.getNumberValue(); },
        };
    };
    /**
     * Gets the groupBy property value. The groupBy property
     * @returns a string
     */
    public get groupBy() {
        return this._groupBy;
    };
    /**
     * Sets the groupBy property value. The groupBy property
     * @param value Value to set for the groupBy property.
     */
    public set groupBy(value: string[] | undefined) {
        if(value) {
            this._groupBy = value;
        }
    };
    /**
     * Gets the id property value. The id property
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        if(value) {
            this._id = value;
        }
    };
    /**
     * Gets the orderBy property value. The orderBy property
     * @returns a string
     */
    public get orderBy() {
        return this._orderBy;
    };
    /**
     * Sets the orderBy property value. The orderBy property
     * @param value Value to set for the orderBy property.
     */
    public set orderBy(value: string[] | undefined) {
        if(value) {
            this._orderBy = value;
        }
    };
    /**
     * Gets the search property value. The search property
     * @returns a string
     */
    public get search() {
        return this._search;
    };
    /**
     * Sets the search property value. The search property
     * @param value Value to set for the search property.
     */
    public set search(value: string | undefined) {
        if(value) {
            this._search = value;
        }
    };
    /**
     * Gets the select property value. The select property
     * @returns a string
     */
    public get select() {
        return this._select;
    };
    /**
     * Sets the select property value. The select property
     * @param value Value to set for the select property.
     */
    public set select(value: string[] | undefined) {
        if(value) {
            this._select = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.groupBy){
            writer.writeCollectionOfPrimitiveValues<string>("groupBy", this.groupBy);
        }
        if(this.id){
            writer.writeStringValue("id", this.id);
        }
        if(this.orderBy){
            writer.writeCollectionOfPrimitiveValues<string>("orderBy", this.orderBy);
        }
        if(this.search){
            writer.writeStringValue("search", this.search);
        }
        if(this.select){
            writer.writeCollectionOfPrimitiveValues<string>("select", this.select);
        }
        if(this.skip){
            writer.writeNumberValue("skip", this.skip);
        }
        if(this.top){
            writer.writeNumberValue("top", this.top);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the skip property value. The skip property
     * @returns a integer
     */
    public get skip() {
        return this._skip;
    };
    /**
     * Sets the skip property value. The skip property
     * @param value Value to set for the skip property.
     */
    public set skip(value: number | undefined) {
        if(value) {
            this._skip = value;
        }
    };
    /**
     * Gets the top property value. The top property
     * @returns a integer
     */
    public get top() {
        return this._top;
    };
    /**
     * Sets the top property value. The top property
     * @param value Value to set for the top property.
     */
    public set top(value: number | undefined) {
        if(value) {
            this._top = value;
        }
    };
}
