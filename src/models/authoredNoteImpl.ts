import {AuthoredNote} from './authoredNote';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {Identity} from './identity';
import {EntityImpl, IdentityImpl, ItemBodyImpl} from './index';
import {ItemBody} from './itemBody';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the privacy singleton. */
export class AuthoredNoteImpl extends EntityImpl implements AuthoredNote, Parsable {
    /** Identity information about the note's author. */
    public author?: Identity | undefined;
    /** The content of the note. */
    public content?: ItemBody | undefined;
    /** The date and time when the entity was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public createdDateTime?: Date | undefined;
    /**
     * Instantiates a new authoredNote and sets the default values.
     * @param authoredNoteParameterValue 
     */
    public constructor(authoredNoteParameterValue?: AuthoredNote | undefined) {
        super();
        this.author = authoredNoteParameterValue?.author ;
        this.content = authoredNoteParameterValue?.content ;
        this.createdDateTime = authoredNoteParameterValue?.createdDateTime ;
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
        writer.writeObjectValue<IdentityImpl>("author", new IdentityImpl(this.author));
        }
        if(this.content){
        writer.writeObjectValue<ItemBodyImpl>("content", new ItemBodyImpl(this.content));
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
    };
}
