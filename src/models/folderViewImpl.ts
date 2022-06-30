import {FolderView} from './folderView';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FolderViewImpl implements FolderView {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The method by which the folder should be sorted. */
    private _sortBy?: string | undefined;
    /** If true, indicates that items should be sorted in descending order. Otherwise, items should be sorted ascending. */
    private _sortOrder?: string | undefined;
    /** The type of view that should be used to represent the folder. */
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new folderView and sets the default values.
     * @param folderViewParameterValue 
     */
    public constructor(folderViewParameterValue?: FolderView | undefined) {
        this._additionalData = folderViewParameterValue?.additionalData ? folderViewParameterValue?.additionalData! : {};
        this._sortBy = folderViewParameterValue?.sortBy;
        this._sortOrder = folderViewParameterValue?.sortOrder;
        this._viewType = folderViewParameterValue?.viewType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "sortBy": n => { this.sortBy = n.getStringValue(); },
            "sortOrder": n => { this.sortOrder = n.getStringValue(); },
            "viewType": n => { this.viewType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.sortBy){
            writer.writeStringValue("sortBy", this.sortBy);
        }
        if(this.sortOrder){
            writer.writeStringValue("sortOrder", this.sortOrder);
        }
        if(this.viewType){
            writer.writeStringValue("viewType", this.viewType);
        }
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
        if(value) {
            this._sortBy = value;
        }
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
        if(value) {
            this._sortOrder = value;
        }
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
        if(value) {
            this._viewType = value;
        }
    };
}
