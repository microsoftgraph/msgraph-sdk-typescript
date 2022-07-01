import {createImageInfoFromDiscriminatorValue} from './createImageInfoFromDiscriminatorValue';
import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {ImageInfo} from './imageInfo';
import {ImageInfoImpl, JsonImpl} from './index';
import {Json} from './json';
import {VisualInfo} from './visualInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VisualInfoImpl implements VisualInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Optional. JSON object used to represent an icon which represents the application used to generate the activity */
    private _attribution?: ImageInfo | undefined;
    /** Optional. Background color used to render the activity in the UI - brand color for the application source of the activity. Must be a valid hex color */
    private _backgroundColor?: string | undefined;
    /** Optional. Custom piece of data - JSON object used to provide custom content to render the activity in the Windows Shell UI */
    private _content?: Json | undefined;
    /** Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or metadata) */
    private _description?: string | undefined;
    /** Required. Short text description of the user's unique activity (for example, document name in cases where an activity refers to document creation) */
    private _displayText?: string | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the attribution property value. Optional. JSON object used to represent an icon which represents the application used to generate the activity
     * @returns a ImageInfoInterface
     */
    public get attribution() {
        return this._attribution;
    };
    /**
     * Sets the attribution property value. Optional. JSON object used to represent an icon which represents the application used to generate the activity
     * @param value Value to set for the attribution property.
     */
    public set attribution(value: ImageInfo | undefined) {
        if(value) {
            this._attribution = value instanceof ImageInfoImpl? value : new ImageInfoImpl(value);
        }
    };
    /**
     * Gets the backgroundColor property value. Optional. Background color used to render the activity in the UI - brand color for the application source of the activity. Must be a valid hex color
     * @returns a string
     */
    public get backgroundColor() {
        return this._backgroundColor;
    };
    /**
     * Sets the backgroundColor property value. Optional. Background color used to render the activity in the UI - brand color for the application source of the activity. Must be a valid hex color
     * @param value Value to set for the backgroundColor property.
     */
    public set backgroundColor(value: string | undefined) {
        if(value) {
            this._backgroundColor = value;
        }
    };
    /**
     * Instantiates a new visualInfo and sets the default values.
     * @param visualInfoParameterValue 
     */
    public constructor(visualInfoParameterValue?: VisualInfo | undefined) {
        this._additionalData = visualInfoParameterValue?.additionalData ? visualInfoParameterValue?.additionalData! : {};
        this._attribution = visualInfoParameterValue?.attribution;
        this._backgroundColor = visualInfoParameterValue?.backgroundColor;
        this._content = visualInfoParameterValue?.content;
        this._description = visualInfoParameterValue?.description;
        this._displayText = visualInfoParameterValue?.displayText;
    };
    /**
     * Gets the content property value. Optional. Custom piece of data - JSON object used to provide custom content to render the activity in the Windows Shell UI
     * @returns a JsonInterface
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. Optional. Custom piece of data - JSON object used to provide custom content to render the activity in the Windows Shell UI
     * @param value Value to set for the content property.
     */
    public set content(value: Json | undefined) {
        if(value) {
            this._content = value instanceof JsonImpl? value : new JsonImpl(value);
        }
    };
    /**
     * Gets the description property value. Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or metadata)
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or metadata)
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayText property value. Required. Short text description of the user's unique activity (for example, document name in cases where an activity refers to document creation)
     * @returns a string
     */
    public get displayText() {
        return this._displayText;
    };
    /**
     * Sets the displayText property value. Required. Short text description of the user's unique activity (for example, document name in cases where an activity refers to document creation)
     * @param value Value to set for the displayText property.
     */
    public set displayText(value: string | undefined) {
        if(value) {
            this._displayText = value;
        }
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
            writer.writeObjectValue<ImageInfoImpl>("attribution", (!this.attribution || this.attribution instanceof ImageInfoImpl? this.attribution : new ImageInfoImpl(this.attribution)));
        }
        if(this.backgroundColor){
            writer.writeStringValue("backgroundColor", this.backgroundColor);
        }
        if(this.content){
            writer.writeObjectValue<JsonImpl>("content", (!this.content || this.content instanceof JsonImpl? this.content : new JsonImpl(this.content)));
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
