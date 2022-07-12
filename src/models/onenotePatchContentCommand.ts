import {OnenotePatchContentMember1} from './index';
import {OnenotePatchActionType} from './onenotePatchActionType';
import {OnenotePatchInsertPosition} from './onenotePatchInsertPosition';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenotePatchContentCommand implements AdditionalDataHolder, Parsable {
    /** The action property */
    private _action?: OnenotePatchActionType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** A string of well-formed HTML to add to the page, and any image or file binary data. If the content contains binary data, the request must be sent using the multipart/form-data content type with a 'Commands' part. */
    private _content?: string | undefined;
    /** The location to add the supplied content, relative to the target element. Possible values are: after (default) or before. */
    private _position?: OnenotePatchInsertPosition | OnenotePatchContentMember1 | undefined;
    /** The element to update. Must be the #<data-id> or the generated {id} of the element, or the body or title keyword. */
    private _target?: string | undefined;
    /**
     * Gets the action property value. The action property
     * @returns a onenotePatchActionType
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. The action property
     * @param value Value to set for the action property.
     */
    public set action(value: OnenotePatchActionType | undefined) {
        this._action = value;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new onenotePatchContentCommand and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
        this._content = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "action": n => { this.action = n.getEnumValue<OnenotePatchActionType>(OnenotePatchActionType); },
            "content": n => { this.content = n.getStringValue(); },
            "position": n => { this.position = n.getObjectValue<OnenotePatchInsertPosition>(createOnenotePatchInsertPositionFromDiscriminatorValue); },
            "target": n => { this.target = n.getStringValue(); },
        };
    };
    /**
     * Gets the position property value. The location to add the supplied content, relative to the target element. Possible values are: after (default) or before.
     * @returns a onenotePatchContent
     */
    public get position() {
        return this._position;
    };
    /**
     * Sets the position property value. The location to add the supplied content, relative to the target element. Possible values are: after (default) or before.
     * @param value Value to set for the position property.
     */
    public set position(value: OnenotePatchInsertPosition | OnenotePatchContentMember1 | undefined) {
        this._position = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<OnenotePatchActionType>("action", this.action);
        writer.writeStringValue("content", this.content);
        writer.writeObjectValue<OnenotePatchInsertPosition>("position", this.position);
        writer.writeStringValue("target", this.target);
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
        this._target = value;
    };
}
