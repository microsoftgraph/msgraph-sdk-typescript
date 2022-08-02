import {createEdiscoverySearchFromDiscriminatorValue} from './createEdiscoverySearchFromDiscriminatorValue';
import {CaseOperation, EdiscoverySearch} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EdiscoveryEstimateOperation extends CaseOperation implements Parsable {
    /** The estimated count of items for the search that matched the content query. */
    private _indexedItemCount?: number | undefined;
    /** The estimated size of items for the search that matched the content query. */
    private _indexedItemsSize?: number | undefined;
    /** The number of mailboxes that had search hits. */
    private _mailboxCount?: number | undefined;
    /** eDiscovery search. */
    private _search?: EdiscoverySearch | undefined;
    /** The number of mailboxes that had search hits. */
    private _siteCount?: number | undefined;
    /** The estimated count of unindexed items for the collection. */
    private _unindexedItemCount?: number | undefined;
    /** The estimated size of unindexed items for the collection. */
    private _unindexedItemsSize?: number | undefined;
    /**
     * Instantiates a new ediscoveryEstimateOperation and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.security.ediscoveryEstimateOperation";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "indexedItemCount": n => { this.indexedItemCount = n.getNumberValue(); },
            "indexedItemsSize": n => { this.indexedItemsSize = n.getNumberValue(); },
            "mailboxCount": n => { this.mailboxCount = n.getNumberValue(); },
            "search": n => { this.search = n.getObjectValue<EdiscoverySearch>(createEdiscoverySearchFromDiscriminatorValue); },
            "siteCount": n => { this.siteCount = n.getNumberValue(); },
            "unindexedItemCount": n => { this.unindexedItemCount = n.getNumberValue(); },
            "unindexedItemsSize": n => { this.unindexedItemsSize = n.getNumberValue(); },
        };
    };
    /**
     * Gets the indexedItemCount property value. The estimated count of items for the search that matched the content query.
     * @returns a int64
     */
    public get indexedItemCount() {
        return this._indexedItemCount;
    };
    /**
     * Sets the indexedItemCount property value. The estimated count of items for the search that matched the content query.
     * @param value Value to set for the indexedItemCount property.
     */
    public set indexedItemCount(value: number | undefined) {
        this._indexedItemCount = value;
    };
    /**
     * Gets the indexedItemsSize property value. The estimated size of items for the search that matched the content query.
     * @returns a int64
     */
    public get indexedItemsSize() {
        return this._indexedItemsSize;
    };
    /**
     * Sets the indexedItemsSize property value. The estimated size of items for the search that matched the content query.
     * @param value Value to set for the indexedItemsSize property.
     */
    public set indexedItemsSize(value: number | undefined) {
        this._indexedItemsSize = value;
    };
    /**
     * Gets the mailboxCount property value. The number of mailboxes that had search hits.
     * @returns a integer
     */
    public get mailboxCount() {
        return this._mailboxCount;
    };
    /**
     * Sets the mailboxCount property value. The number of mailboxes that had search hits.
     * @param value Value to set for the mailboxCount property.
     */
    public set mailboxCount(value: number | undefined) {
        this._mailboxCount = value;
    };
    /**
     * Gets the search property value. eDiscovery search.
     * @returns a ediscoverySearch
     */
    public get search() {
        return this._search;
    };
    /**
     * Sets the search property value. eDiscovery search.
     * @param value Value to set for the search property.
     */
    public set search(value: EdiscoverySearch | undefined) {
        this._search = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("indexedItemCount", this.indexedItemCount);
        writer.writeNumberValue("indexedItemsSize", this.indexedItemsSize);
        writer.writeNumberValue("mailboxCount", this.mailboxCount);
        writer.writeObjectValue<EdiscoverySearch>("search", this.search);
        writer.writeNumberValue("siteCount", this.siteCount);
        writer.writeNumberValue("unindexedItemCount", this.unindexedItemCount);
        writer.writeNumberValue("unindexedItemsSize", this.unindexedItemsSize);
    };
    /**
     * Gets the siteCount property value. The number of mailboxes that had search hits.
     * @returns a integer
     */
    public get siteCount() {
        return this._siteCount;
    };
    /**
     * Sets the siteCount property value. The number of mailboxes that had search hits.
     * @param value Value to set for the siteCount property.
     */
    public set siteCount(value: number | undefined) {
        this._siteCount = value;
    };
    /**
     * Gets the unindexedItemCount property value. The estimated count of unindexed items for the collection.
     * @returns a int64
     */
    public get unindexedItemCount() {
        return this._unindexedItemCount;
    };
    /**
     * Sets the unindexedItemCount property value. The estimated count of unindexed items for the collection.
     * @param value Value to set for the unindexedItemCount property.
     */
    public set unindexedItemCount(value: number | undefined) {
        this._unindexedItemCount = value;
    };
    /**
     * Gets the unindexedItemsSize property value. The estimated size of unindexed items for the collection.
     * @returns a int64
     */
    public get unindexedItemsSize() {
        return this._unindexedItemsSize;
    };
    /**
     * Sets the unindexedItemsSize property value. The estimated size of unindexed items for the collection.
     * @param value Value to set for the unindexedItemsSize property.
     */
    public set unindexedItemsSize(value: number | undefined) {
        this._unindexedItemsSize = value;
    };
}
