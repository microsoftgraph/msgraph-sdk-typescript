import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FolderView implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The method by which the folder should be sorted.  */
    private _sortBy?: string | undefined;
    /** If true, indicates that items should be sorted in descending order. Otherwise, items should be sorted ascending.  */
    private _sortOrder?: string | undefined;
    /** The type of view that should be used to represent the folder.  */
    private _viewType?: string | undefined;
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
     * Instantiates a new folderView and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "sortBy": (o, n) => { (o as unknown as FolderView).sortBy = n.getStringValue(); },
            "sortOrder": (o, n) => { (o as unknown as FolderView).sortOrder = n.getStringValue(); },
            "viewType": (o, n) => { (o as unknown as FolderView).viewType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("sortBy", this.sortBy);
        writer.writeStringValue("sortOrder", this.sortOrder);
        writer.writeStringValue("viewType", this.viewType);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sortBy property value. The method by which the folder should be sorted.
     * @returns a string
     */
    public get sortBy() {
        return this._sortBy;
    };
    /**
     * Sets the sortBy property value. The method by which the folder should be sorted.
     * @param value Value to set for the sortBy property.
     */
    public set sortBy(value: string | undefined) {
        this._sortBy = value;
    };
    /**
     * Gets the sortOrder property value. If true, indicates that items should be sorted in descending order. Otherwise, items should be sorted ascending.
     * @returns a string
     */
    public get sortOrder() {
        return this._sortOrder;
    };
    /**
     * Sets the sortOrder property value. If true, indicates that items should be sorted in descending order. Otherwise, items should be sorted ascending.
     * @param value Value to set for the sortOrder property.
     */
    public set sortOrder(value: string | undefined) {
        this._sortOrder = value;
    };
    /**
     * Gets the viewType property value. The type of view that should be used to represent the folder.
     * @returns a string
     */
    public get viewType() {
        return this._viewType;
    };
    /**
     * Sets the viewType property value. The type of view that should be used to represent the folder.
     * @param value Value to set for the viewType property.
     */
    public set viewType(value: string | undefined) {
        this._viewType = value;
    };
}
