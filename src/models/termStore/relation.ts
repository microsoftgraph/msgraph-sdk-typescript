import {Entity} from '../';
import {AdminMember1, Set, Term} from './index';
import {RelationType} from './relationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class Relation extends Entity implements Parsable {
    /** The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set]. */
    private _fromTerm?: Term | AdminMember1 | undefined;
    /** The type of relation. Possible values are: pin, reuse. */
    private _relationship?: RelationType | AdminMember1 | undefined;
    /** The [set] in which the relation is relevant. */
    private _set?: Set | AdminMember1 | undefined;
    /** The to [term] of the relation. The term to which the relationship is defined. */
    private _toTerm?: Term | AdminMember1 | undefined;
    /**
     * Instantiates a new relation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the fromTerm property value. The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
     * @returns a admin
     */
    public get fromTerm() {
        return this._fromTerm;
    };
    /**
     * Sets the fromTerm property value. The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
     * @param value Value to set for the fromTerm property.
     */
    public set fromTerm(value: Term | AdminMember1 | undefined) {
        this._fromTerm = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fromTerm": n => { this.fromTerm = n.getObjectValue<Term>(createTermFromDiscriminatorValue); },
            "relationship": n => { this.relationship = n.getObjectValue<RelationType>(createRelationTypeFromDiscriminatorValue); },
            "set": n => { this.set = n.getObjectValue<Set>(createSetFromDiscriminatorValue); },
            "toTerm": n => { this.toTerm = n.getObjectValue<Term>(createTermFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the relationship property value. The type of relation. Possible values are: pin, reuse.
     * @returns a admin
     */
    public get relationship() {
        return this._relationship;
    };
    /**
     * Sets the relationship property value. The type of relation. Possible values are: pin, reuse.
     * @param value Value to set for the relationship property.
     */
    public set relationship(value: RelationType | AdminMember1 | undefined) {
        this._relationship = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Term>("fromTerm", this.fromTerm);
        writer.writeObjectValue<RelationType>("relationship", this.relationship);
        writer.writeObjectValue<Set>("set", this.set);
        writer.writeObjectValue<Term>("toTerm", this.toTerm);
    };
    /**
     * Gets the set property value. The [set] in which the relation is relevant.
     * @returns a admin
     */
    public get set() {
        return this._set;
    };
    /**
     * Sets the set property value. The [set] in which the relation is relevant.
     * @param value Value to set for the set property.
     */
    public set set(value: Set | AdminMember1 | undefined) {
        this._set = value;
    };
    /**
     * Gets the toTerm property value. The to [term] of the relation. The term to which the relationship is defined.
     * @returns a admin
     */
    public get toTerm() {
        return this._toTerm;
    };
    /**
     * Sets the toTerm property value. The to [term] of the relation. The term to which the relationship is defined.
     * @param value Value to set for the toTerm property.
     */
    public set toTerm(value: Term | AdminMember1 | undefined) {
        this._toTerm = value;
    };
}
