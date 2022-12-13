import {AlertEvidence} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MailClusterEvidence extends AlertEvidence implements Parsable {
    /** The clusterBy property */
    private _clusterBy?: string | undefined;
    /** The clusterByValue property */
    private _clusterByValue?: string | undefined;
    /** The emailCount property */
    private _emailCount?: number | undefined;
    /** The networkMessageIds property */
    private _networkMessageIds?: string[] | undefined;
    /** The query property */
    private _query?: string | undefined;
    /** The urn property */
    private _urn?: string | undefined;
    /**
     * Gets the clusterBy property value. The clusterBy property
     * @returns a string
     */
    public get clusterBy() {
        return this._clusterBy;
    };
    /**
     * Sets the clusterBy property value. The clusterBy property
     * @param value Value to set for the clusterBy property.
     */
    public set clusterBy(value: string | undefined) {
        this._clusterBy = value;
    };
    /**
     * Gets the clusterByValue property value. The clusterByValue property
     * @returns a string
     */
    public get clusterByValue() {
        return this._clusterByValue;
    };
    /**
     * Sets the clusterByValue property value. The clusterByValue property
     * @param value Value to set for the clusterByValue property.
     */
    public set clusterByValue(value: string | undefined) {
        this._clusterByValue = value;
    };
    /**
     * Instantiates a new MailClusterEvidence and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the emailCount property value. The emailCount property
     * @returns a int64
     */
    public get emailCount() {
        return this._emailCount;
    };
    /**
     * Sets the emailCount property value. The emailCount property
     * @param value Value to set for the emailCount property.
     */
    public set emailCount(value: number | undefined) {
        this._emailCount = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "clusterBy": n => { this.clusterBy = n.getStringValue(); },
            "clusterByValue": n => { this.clusterByValue = n.getStringValue(); },
            "emailCount": n => { this.emailCount = n.getNumberValue(); },
            "networkMessageIds": n => { this.networkMessageIds = n.getCollectionOfPrimitiveValues<string>(); },
            "query": n => { this.query = n.getStringValue(); },
            "urn": n => { this.urn = n.getStringValue(); },
        };
    };
    /**
     * Gets the networkMessageIds property value. The networkMessageIds property
     * @returns a string
     */
    public get networkMessageIds() {
        return this._networkMessageIds;
    };
    /**
     * Sets the networkMessageIds property value. The networkMessageIds property
     * @param value Value to set for the networkMessageIds property.
     */
    public set networkMessageIds(value: string[] | undefined) {
        this._networkMessageIds = value;
    };
    /**
     * Gets the query property value. The query property
     * @returns a string
     */
    public get query() {
        return this._query;
    };
    /**
     * Sets the query property value. The query property
     * @param value Value to set for the query property.
     */
    public set query(value: string | undefined) {
        this._query = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("clusterBy", this.clusterBy);
        writer.writeStringValue("clusterByValue", this.clusterByValue);
        writer.writeNumberValue("emailCount", this.emailCount);
        writer.writeCollectionOfPrimitiveValues<string>("networkMessageIds", this.networkMessageIds);
        writer.writeStringValue("query", this.query);
        writer.writeStringValue("urn", this.urn);
    };
    /**
     * Gets the urn property value. The urn property
     * @returns a string
     */
    public get urn() {
        return this._urn;
    };
    /**
     * Sets the urn property value. The urn property
     * @param value Value to set for the urn property.
     */
    public set urn(value: string | undefined) {
        this._urn = value;
    };
}
