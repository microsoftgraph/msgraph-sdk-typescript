import {FolderView} from './folderView';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FolderViewImpl implements AdditionalDataHolder, FolderView, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The method by which the folder should be sorted. */
    public sortBy?: string | undefined;
    /** If true, indicates that items should be sorted in descending order. Otherwise, items should be sorted ascending. */
    public sortOrder?: string | undefined;
    /** The type of view that should be used to represent the folder. */
    public viewType?: string | undefined;
    /**
     * Instantiates a new folderView and sets the default values.
     * @param folderViewParameterValue 
     */
    public constructor(folderViewParameterValue?: FolderView | undefined) {
        this.additionalData = folderViewParameterValue?.additionalData ? folderViewParameterValue?.additionalData! : {}
        this.sortBy = folderViewParameterValue?.sortBy ;
        this.sortOrder = folderViewParameterValue?.sortOrder ;
        this.viewType = folderViewParameterValue?.viewType ;
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
}
