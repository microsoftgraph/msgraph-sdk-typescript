import {ResourceVisualization} from './resourceVisualization';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResourceVisualizationImpl implements AdditionalDataHolder, Parsable, ResourceVisualization {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A string describing where the item is stored. For example, the name of a SharePoint site or the user name identifying the owner of the OneDrive storing the item. */
    public containerDisplayName?: string | undefined;
    /** Can be used for filtering by the type of container in which the file is stored. Such as Site or OneDriveBusiness. */
    public containerType?: string | undefined;
    /** A path leading to the folder in which the item is stored. */
    public containerWebUrl?: string | undefined;
    /** The item's media type. Can be used for filtering for a specific type of file based on supported IANA Media Mime Types. Note that not all Media Mime Types are supported. */
    public mediaType?: string | undefined;
    /** A URL leading to the preview image for the item. */
    public previewImageUrl?: string | undefined;
    /** A preview text for the item. */
    public previewText?: string | undefined;
    /** The item's title text. */
    public title?: string | undefined;
    /** The item's media type. Can be used for filtering for a specific file based on a specific type. See below for supported types. */
    public type?: string | undefined;
    /**
     * Instantiates a new resourceVisualization and sets the default values.
     * @param resourceVisualizationParameterValue 
     */
    public constructor(resourceVisualizationParameterValue?: ResourceVisualization | undefined) {
        this.additionalData = resourceVisualizationParameterValue?.additionalData ? resourceVisualizationParameterValue?.additionalData! : {}
        this.containerDisplayName = resourceVisualizationParameterValue?.containerDisplayName ;
        this.containerType = resourceVisualizationParameterValue?.containerType ;
        this.containerWebUrl = resourceVisualizationParameterValue?.containerWebUrl ;
        this.mediaType = resourceVisualizationParameterValue?.mediaType ;
        this.previewImageUrl = resourceVisualizationParameterValue?.previewImageUrl ;
        this.previewText = resourceVisualizationParameterValue?.previewText ;
        this.title = resourceVisualizationParameterValue?.title ;
        this.type = resourceVisualizationParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "containerDisplayName": n => { this.containerDisplayName = n.getStringValue(); },
            "containerType": n => { this.containerType = n.getStringValue(); },
            "containerWebUrl": n => { this.containerWebUrl = n.getStringValue(); },
            "mediaType": n => { this.mediaType = n.getStringValue(); },
            "previewImageUrl": n => { this.previewImageUrl = n.getStringValue(); },
            "previewText": n => { this.previewText = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.containerDisplayName){
        writer.writeStringValue("containerDisplayName", this.containerDisplayName);
        }
        if(this.containerType){
        writer.writeStringValue("containerType", this.containerType);
        }
        if(this.containerWebUrl){
        writer.writeStringValue("containerWebUrl", this.containerWebUrl);
        }
        if(this.mediaType){
        writer.writeStringValue("mediaType", this.mediaType);
        }
        if(this.previewImageUrl){
        writer.writeStringValue("previewImageUrl", this.previewImageUrl);
        }
        if(this.previewText){
        writer.writeStringValue("previewText", this.previewText);
        }
        if(this.title){
        writer.writeStringValue("title", this.title);
        }
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
