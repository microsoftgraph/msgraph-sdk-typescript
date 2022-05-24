import {createImageInfoFromDiscriminatorValue} from './createImageInfoFromDiscriminatorValue';
import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {ImageInfo} from './imageInfo';
import {ImageInfoImpl, JsonImpl} from './index';
import {Json} from './json';
import {VisualInfo} from './visualInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VisualInfoImpl implements AdditionalDataHolder, Parsable, VisualInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Optional. JSON object used to represent an icon which represents the application used to generate the activity */
    public attribution?: ImageInfo | undefined;
    /** Optional. Background color used to render the activity in the UI - brand color for the application source of the activity. Must be a valid hex color */
    public backgroundColor?: string | undefined;
    /** Optional. Custom piece of data - JSON object used to provide custom content to render the activity in the Windows Shell UI */
    public content?: Json | undefined;
    /** Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or metadata) */
    public description?: string | undefined;
    /** Required. Short text description of the user's unique activity (for example, document name in cases where an activity refers to document creation) */
    public displayText?: string | undefined;
    /**
     * Instantiates a new visualInfo and sets the default values.
     * @param visualInfoParameterValue 
     */
    public constructor(visualInfoParameterValue?: VisualInfo | undefined) {
        this.additionalData = visualInfoParameterValue?.additionalData ? visualInfoParameterValue?.additionalData! : {}
        this.attribution = visualInfoParameterValue?.attribution ;
        this.backgroundColor = visualInfoParameterValue?.backgroundColor ;
        this.content = visualInfoParameterValue?.content ;
        this.description = visualInfoParameterValue?.description ;
        this.displayText = visualInfoParameterValue?.displayText ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attribution": n => { this.attribution = n.getObjectValue<ImageInfoImpl>(createImageInfoFromDiscriminatorValue); },
            "backgroundColor": n => { this.backgroundColor = n.getStringValue(); },
            "content": n => { this.content = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayText": n => { this.displayText = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.attribution){
        writer.writeObjectValue<ImageInfoImpl>("attribution", new ImageInfoImpl(this.attribution));
        }
        if(this.backgroundColor){
        writer.writeStringValue("backgroundColor", this.backgroundColor);
        }
        if(this.content){
        writer.writeObjectValue<JsonImpl>("content", new JsonImpl(this.content));
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayText){
        writer.writeStringValue("displayText", this.displayText);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
