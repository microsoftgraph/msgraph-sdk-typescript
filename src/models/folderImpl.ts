import {createFolderViewFromDiscriminatorValue} from './createFolderViewFromDiscriminatorValue';
import {Folder} from './folder';
import {FolderView} from './folderView';
import {FolderViewImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FolderImpl implements Folder {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Number of children contained immediately within this container. */
    private _childCount?: number | undefined;
    /** A collection of properties defining the recommended view for the folder. */
    private _view?: FolderView | undefined;
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
     * Gets the childCount property value. Number of children contained immediately within this container.
     * @returns a integer
     */
    public get childCount() {
        return this._childCount;
    };
    /**
     * Sets the childCount property value. Number of children contained immediately within this container.
     * @param value Value to set for the childCount property.
     */
    public set childCount(value: number | undefined) {
        if(value) {
            this._childCount = value;
        }
    };
    /**
     * Instantiates a new folder and sets the default values.
     * @param folderParameterValue 
     */
    public constructor(folderParameterValue?: Folder | undefined) {
        this._additionalData = folderParameterValue?.additionalData ? folderParameterValue?.additionalData! : {};
        this._childCount = folderParameterValue?.childCount;
        this._view = folderParameterValue?.view;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "childCount": n => { this.childCount = n.getNumberValue(); },
            "view": n => { this.view = n.getObjectValue<FolderViewImpl>(createFolderViewFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.childCount){
            writer.writeNumberValue("childCount", this.childCount);
        }
        if(this.view){
            writer.writeObjectValue<FolderViewImpl>("view", (!this.view || this.view instanceof FolderViewImpl? this.view : new FolderViewImpl(this.view)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the view property value. A collection of properties defining the recommended view for the folder.
     * @returns a FolderViewInterface
     */
    public get view() {
        return this._view;
    };
    /**
     * Sets the view property value. A collection of properties defining the recommended view for the folder.
     * @param value Value to set for the view property.
     */
    public set view(value: FolderView | undefined) {
        if(value) {
            this._view = value instanceof FolderViewImpl? value : new FolderViewImpl(value);
        }
    };
}
