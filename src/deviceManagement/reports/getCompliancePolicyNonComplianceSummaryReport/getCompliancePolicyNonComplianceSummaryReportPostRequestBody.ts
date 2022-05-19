import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getCompliancePolicyNonComplianceSummaryReport method. */
export class GetCompliancePolicyNonComplianceSummaryReportPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The filter property */
    private _filter?: string | undefined;
    /** The groupBy property */
    private _groupBy?: string[] | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The orderBy property */
    private _orderBy?: string[] | undefined;
    /** The search property */
    private _search?: string | undefined;
    /** The select property */
    private _select?: string[] | undefined;
    /** The sessionId property */
    private _sessionId?: string | undefined;
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new getCompliancePolicyNonComplianceSummaryReportPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the filter property value. The filter property
     * @returns a string
     */
    public get filter() {
        return this._filter;
    };
    /**
     * Sets the filter property value. The filter property
     * @param value Value to set for the filter property.
     */
    public set filter(value: string | undefined) {
        this._filter = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "filter": n => { this.filter = n.getStringValue(); },
            "groupBy": n => { this.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
            "name": n => { this.name = n.getStringValue(); },
            "orderBy": n => { this.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
            "search": n => { this.search = n.getStringValue(); },
            "select": n => { this.select = n.getCollectionOfPrimitiveValues<string>(); },
            "sessionId": n => { this.sessionId = n.getStringValue(); },
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
        this._groupBy = value;
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
        this._orderBy = value;
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
        this._search = value;
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
        this._select = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("filter", this.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", this.groupBy);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", this.orderBy);
        writer.writeStringValue("search", this.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", this.select);
        writer.writeStringValue("sessionId", this.sessionId);
        writer.writeNumberValue("skip", this.skip);
        writer.writeNumberValue("top", this.top);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sessionId property value. The sessionId property
     * @returns a string
     */
    public get sessionId() {
        return this._sessionId;
    };
    /**
     * Sets the sessionId property value. The sessionId property
     * @param value Value to set for the sessionId property.
     */
    public set sessionId(value: string | undefined) {
        this._sessionId = value;
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
        this._skip = value;
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
        this._top = value;
    };
}
