import {AuthoredNote} from './authoredNote';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {Identity} from './identity';
import {EntityImpl, IdentityImpl, ItemBodyImpl} from './index';
import {ItemBody} from './itemBody';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the privacy singleton. */
export class AuthoredNoteImpl extends EntityImpl implements AuthoredNote {
    /** Identity information about the note's author. */
    private _author?: Identity | undefined;
    /** The content of the note. */
    private _content?: ItemBody | undefined;
    /** The date and time when the entity was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _createdDateTime?: Date | undefined;
    /**
     * Gets the author property value. Identity information about the note's author.
     * @returns a IdentityInterface
     */
    public get author() {
        return this._author;
    };
    /**
     * Sets the author property value. Identity information about the note's author.
     * @param value Value to set for the author property.
     */
    public set author(value: Identity | undefined) {
        if(value) {
            this._author = value instanceof IdentityImpl? value : new IdentityImpl(value);
        }
    };
    /**
     * Instantiates a new authoredNote and sets the default values.
     * @param authoredNoteParameterValue 
     */
    public constructor(authoredNoteParameterValue?: AuthoredNote | undefined) {
        super(authoredNoteParameterValue);
        this._author = authoredNoteParameterValue?.author;
        this._content = authoredNoteParameterValue?.content;
        this._createdDateTime = authoredNoteParameterValue?.createdDateTime;
    };
    /**
     * Gets the content property value. The content of the note.
     * @returns a ItemBodyInterface
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content of the note.
     * @param value Value to set for the content property.
     */
    public set content(value: ItemBody | undefined) {
        if(value) {
            this._content = value instanceof ItemBodyImpl? value : new ItemBodyImpl(value);
        }
    };
    /**
     * Gets the createdDateTime property value. The date and time when the entity was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time when the entity was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "author": n => { this.author = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
            "content": n => { this.content = n.getObjectValue<ItemBodyImpl>(createItemBodyFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.author){
            writer.writeObjectValue<IdentityImpl>("author", (!this.author || this.author instanceof IdentityImpl? this.author : new IdentityImpl(this.author)));
        }
        if(this.content){
            writer.writeObjectValue<ItemBodyImpl>("content", (!this.content || this.content instanceof ItemBodyImpl? this.content : new ItemBodyImpl(this.content)));
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
    };
}
