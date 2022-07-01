import {OnenotePatchActionType} from './onenotePatchActionType';
import {OnenotePatchContentCommand} from './onenotePatchContentCommand';
import {OnenotePatchInsertPosition} from './onenotePatchInsertPosition';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenotePatchContentCommandImpl implements OnenotePatchContentCommand {
    /** The action to perform on the target element. Possible values are: replace, append, delete, insert, or prepend. */
    private _action?: OnenotePatchActionType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** A string of well-formed HTML to add to the page, and any image or file binary data. If the content contains binary data, the request must be sent using the multipart/form-data content type with a 'Commands' part. */
    private _content?: string | undefined;
    /** The location to add the supplied content, relative to the target element. Possible values are: after (default) or before. */
    private _position?: OnenotePatchInsertPosition | undefined;
    /** The element to update. Must be the #<data-id> or the generated {id} of the element, or the body or title keyword. */
    private _target?: string | undefined;
    /**
     * Gets the action property value. The action to perform on the target element. Possible values are: replace, append, delete, insert, or prepend.
     * @returns a onenotePatchActionType
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. The action to perform on the target element. Possible values are: replace, append, delete, insert, or prepend.
     * @param value Value to set for the action property.
     */
    public set action(value: OnenotePatchActionType | undefined) {
        if(value) {
            this._action = value;
        }
    };
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
     * Instantiates a new onenotePatchContentCommand and sets the default values.
     * @param onenotePatchContentCommandParameterValue 
     */
    public constructor(onenotePatchContentCommandParameterValue?: OnenotePatchContentCommand | undefined) {
        this._action = onenotePatchContentCommandParameterValue?.action;
        this._additionalData = onenotePatchContentCommandParameterValue?.additionalData ? onenotePatchContentCommandParameterValue?.additionalData! : {};
        this._content = onenotePatchContentCommandParameterValue?.content;
        this._position = onenotePatchContentCommandParameterValue?.position;
        this._target = onenotePatchContentCommandParameterValue?.target;
    };
    /**
     * Gets the content property value. A string of well-formed HTML to add to the page, and any image or file binary data. If the content contains binary data, the request must be sent using the multipart/form-data content type with a 'Commands' part.
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. A string of well-formed HTML to add to the page, and any image or file binary data. If the content contains binary data, the request must be sent using the multipart/form-data content type with a 'Commands' part.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        if(value) {
            this._content = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "action": n => { this.action = n.getEnumValue<OnenotePatchActionType>(OnenotePatchActionType); },
            "content": n => { this.content = n.getStringValue(); },
            "position": n => { this.position = n.getEnumValue<OnenotePatchInsertPosition>(OnenotePatchInsertPosition); },
            "target": n => { this.target = n.getStringValue(); },
        };
    };
    /**
     * Gets the position property value. The location to add the supplied content, relative to the target element. Possible values are: after (default) or before.
     * @returns a onenotePatchInsertPosition
     */
    public get position() {
        return this._position;
    };
    /**
     * Sets the position property value. The location to add the supplied content, relative to the target element. Possible values are: after (default) or before.
     * @param value Value to set for the position property.
     */
    public set position(value: OnenotePatchInsertPosition | undefined) {
        if(value) {
            this._position = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.action){
            writer.writeEnumValue<OnenotePatchActionType>("action", this.action);
        }
        if(this.content){
            writer.writeStringValue("content", this.content);
        }
        if(this.position){
            writer.writeEnumValue<OnenotePatchInsertPosition>("position", this.position);
        }
        if(this.target){
            writer.writeStringValue("target", this.target);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the target property value. The element to update. Must be the #<data-id> or the generated {id} of the element, or the body or title keyword.
     * @returns a string
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. The element to update. Must be the #<data-id> or the generated {id} of the element, or the body or title keyword.
     * @param value Value to set for the target property.
     */
    public set target(value: string | undefined) {
        if(value) {
            this._target = value;
        }
    };
}
