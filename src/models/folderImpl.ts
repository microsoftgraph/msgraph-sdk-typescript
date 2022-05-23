import {createFolderViewFromDiscriminatorValue} from './createFolderViewFromDiscriminatorValue';
import {Folder} from './folder';
import {FolderView} from './folderView';
import {FolderViewImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FolderImpl implements AdditionalDataHolder, Folder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Number of children contained immediately within this container. */
    public childCount?: number | undefined;
    /** A collection of properties defining the recommended view for the folder. */
    public view?: FolderView | undefined;
    /**
     * Instantiates a new folder and sets the default values.
     * @param folderParameterValue 
     */
    public constructor(folderParameterValue?: Folder | undefined) {
        this.additionalData = folderParameterValue?.additionalData ? folderParameterValue?.additionalData! : {}
        this.childCount = folderParameterValue?.childCount ;
        this.view = folderParameterValue?.view ;
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
        writer.writeObjectValue<FolderViewImpl>("view", new FolderViewImpl(this.view));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
