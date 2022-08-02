import {MailFolder} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MailSearchFolder extends MailFolder implements Parsable {
    /** The OData query to filter the messages. */
    private _filterQuery?: string | undefined;
    /** Indicates how the mailbox folder hierarchy should be traversed in the search. true means that a deep search should be done to include child folders in the hierarchy of each folder explicitly specified in sourceFolderIds. false means a shallow search of only each of the folders explicitly specified in sourceFolderIds. */
    private _includeNestedFolders?: boolean | undefined;
    /** Indicates whether a search folder is editable using REST APIs. */
    private _isSupported?: boolean | undefined;
    /** The mailbox folders that should be mined. */
    private _sourceFolderIds?: string[] | undefined;
    /**
     * Instantiates a new MailSearchFolder and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.mailSearchFolder";
    };
    /**
     * Gets the filterQuery property value. The OData query to filter the messages.
     * @returns a string
     */
    public get filterQuery() {
        return this._filterQuery;
    };
    /**
     * Sets the filterQuery property value. The OData query to filter the messages.
     * @param value Value to set for the filterQuery property.
     */
    public set filterQuery(value: string | undefined) {
        this._filterQuery = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "filterQuery": n => { this.filterQuery = n.getStringValue(); },
            "includeNestedFolders": n => { this.includeNestedFolders = n.getBooleanValue(); },
            "isSupported": n => { this.isSupported = n.getBooleanValue(); },
            "sourceFolderIds": n => { this.sourceFolderIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the includeNestedFolders property value. Indicates how the mailbox folder hierarchy should be traversed in the search. true means that a deep search should be done to include child folders in the hierarchy of each folder explicitly specified in sourceFolderIds. false means a shallow search of only each of the folders explicitly specified in sourceFolderIds.
     * @returns a boolean
     */
    public get includeNestedFolders() {
        return this._includeNestedFolders;
    };
    /**
     * Sets the includeNestedFolders property value. Indicates how the mailbox folder hierarchy should be traversed in the search. true means that a deep search should be done to include child folders in the hierarchy of each folder explicitly specified in sourceFolderIds. false means a shallow search of only each of the folders explicitly specified in sourceFolderIds.
     * @param value Value to set for the includeNestedFolders property.
     */
    public set includeNestedFolders(value: boolean | undefined) {
        this._includeNestedFolders = value;
    };
    /**
     * Gets the isSupported property value. Indicates whether a search folder is editable using REST APIs.
     * @returns a boolean
     */
    public get isSupported() {
        return this._isSupported;
    };
    /**
     * Sets the isSupported property value. Indicates whether a search folder is editable using REST APIs.
     * @param value Value to set for the isSupported property.
     */
    public set isSupported(value: boolean | undefined) {
        this._isSupported = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("filterQuery", this.filterQuery);
        writer.writeBooleanValue("includeNestedFolders", this.includeNestedFolders);
        writer.writeBooleanValue("isSupported", this.isSupported);
        writer.writeCollectionOfPrimitiveValues<string>("sourceFolderIds", this.sourceFolderIds);
    };
    /**
     * Gets the sourceFolderIds property value. The mailbox folders that should be mined.
     * @returns a string
     */
    public get sourceFolderIds() {
        return this._sourceFolderIds;
    };
    /**
     * Sets the sourceFolderIds property value. The mailbox folders that should be mined.
     * @param value Value to set for the sourceFolderIds property.
     */
    public set sourceFolderIds(value: string[] | undefined) {
        this._sourceFolderIds = value;
    };
}
