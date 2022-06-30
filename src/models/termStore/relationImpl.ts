import {EntityImpl} from '../';
import {createSetFromDiscriminatorValue} from './createSetFromDiscriminatorValue';
import {createTermFromDiscriminatorValue} from './createTermFromDiscriminatorValue';
import {SetImpl, TermImpl} from './index';
import {Relation} from './relation';
import {RelationType} from './relationType';
import {Set} from './set';
import {Term} from './term';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class RelationImpl extends EntityImpl implements Relation {
    /** The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set]. */
    private _fromTerm?: Term | undefined;
    /** The type of relation. Possible values are: pin, reuse. */
    private _relationship?: RelationType | undefined;
    /** The [set] in which the relation is relevant. */
    private _set?: Set | undefined;
    /** The to [term] of the relation. The term to which the relationship is defined. */
    private _toTerm?: Term | undefined;
    /**
     * Instantiates a new relation and sets the default values.
     * @param relationParameterValue 
     */
    public constructor(relationParameterValue?: Relation | undefined) {
        super(relationParameterValue);
        this._fromTerm = relationParameterValue?.fromTerm;
        this._relationship = relationParameterValue?.relationship;
        this._set = relationParameterValue?.set;
        this._toTerm = relationParameterValue?.toTerm;
    };
    /**
     * Gets the fromTerm property value. The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
     * @returns a TermInterface
     */
    public get fromTerm() {
        return this._fromTerm;
    };
    /**
     * Sets the fromTerm property value. The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
     * @param value Value to set for the fromTerm property.
     */
    public set fromTerm(value: Term | undefined) {
        if(value) {
            this._fromTerm = value instanceof TermImpl? value : new TermImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fromTerm": n => { this.fromTerm = n.getObjectValue<TermImpl>(createTermFromDiscriminatorValue); },
            "relationship": n => { this.relationship = n.getEnumValue<RelationType>(RelationType); },
            "set": n => { this.set = n.getObjectValue<SetImpl>(createSetFromDiscriminatorValue); },
            "toTerm": n => { this.toTerm = n.getObjectValue<TermImpl>(createTermFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the relationship property value. The type of relation. Possible values are: pin, reuse.
     * @returns a relationType
     */
    public get relationship() {
        return this._relationship;
    };
    /**
     * Sets the relationship property value. The type of relation. Possible values are: pin, reuse.
     * @param value Value to set for the relationship property.
     */
    public set relationship(value: RelationType | undefined) {
        if(value) {
            this._relationship = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.fromTerm){
            writer.writeObjectValue<TermImpl>("fromTerm", (!this.fromTerm || this.fromTerm instanceof TermImpl? this.fromTerm : new TermImpl(this.fromTerm)));
        }
        if(this.relationship){
            writer.writeEnumValue<RelationType>("relationship", this.relationship);
        }
        if(this.set){
            writer.writeObjectValue<SetImpl>("set", (!this.set || this.set instanceof SetImpl? this.set : new SetImpl(this.set)));
        }
        if(this.toTerm){
            writer.writeObjectValue<TermImpl>("toTerm", (!this.toTerm || this.toTerm instanceof TermImpl? this.toTerm : new TermImpl(this.toTerm)));
        }
    };
    /**
     * Gets the set property value. The [set] in which the relation is relevant.
     * @returns a SetInterface
     */
    public get set() {
        return this._set;
    };
    /**
     * Sets the set property value. The [set] in which the relation is relevant.
     * @param value Value to set for the set property.
     */
    public set set(value: Set | undefined) {
        if(value) {
            this._set = value instanceof SetImpl? value : new SetImpl(value);
        }
    };
    /**
     * Gets the toTerm property value. The to [term] of the relation. The term to which the relationship is defined.
     * @returns a TermInterface
     */
    public get toTerm() {
        return this._toTerm;
    };
    /**
     * Sets the toTerm property value. The to [term] of the relation. The term to which the relationship is defined.
     * @param value Value to set for the toTerm property.
     */
    public set toTerm(value: Term | undefined) {
        if(value) {
            this._toTerm = value instanceof TermImpl? value : new TermImpl(value);
        }
    };
}
