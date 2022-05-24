import {OnenotePatchActionType} from './onenotePatchActionType';
import {OnenotePatchContentCommand} from './onenotePatchContentCommand';
import {OnenotePatchInsertPosition} from './onenotePatchInsertPosition';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenotePatchContentCommandImpl implements AdditionalDataHolder, OnenotePatchContentCommand, Parsable {
    /** The action to perform on the target element. Possible values are: replace, append, delete, insert, or prepend. */
    public action?: OnenotePatchActionType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A string of well-formed HTML to add to the page, and any image or file binary data. If the content contains binary data, the request must be sent using the multipart/form-data content type with a 'Commands' part. */
    public content?: string | undefined;
    /** The location to add the supplied content, relative to the target element. Possible values are: after (default) or before. */
    public position?: OnenotePatchInsertPosition | undefined;
    /** The element to update. Must be the #<data-id> or the generated {id} of the element, or the body or title keyword. */
    public target?: string | undefined;
    /**
     * Instantiates a new onenotePatchContentCommand and sets the default values.
     * @param onenotePatchContentCommandParameterValue 
     */
    public constructor(onenotePatchContentCommandParameterValue?: OnenotePatchContentCommand | undefined) {
        this.action = onenotePatchContentCommandParameterValue?.action ;
        this.additionalData = onenotePatchContentCommandParameterValue?.additionalData ? onenotePatchContentCommandParameterValue?.additionalData! : {}
        this.content = onenotePatchContentCommandParameterValue?.content ;
        this.position = onenotePatchContentCommandParameterValue?.position ;
        this.target = onenotePatchContentCommandParameterValue?.target ;
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
}
