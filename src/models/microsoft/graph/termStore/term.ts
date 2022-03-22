import {Entity, KeyValue} from '../';
import {createKeyValueFromDiscriminatorValue} from '../createKeyValueFromDiscriminatorValue';
import {createLocalizedDescriptionFromDiscriminatorValue} from './createLocalizedDescriptionFromDiscriminatorValue';
import {createLocalizedLabelFromDiscriminatorValue} from './createLocalizedLabelFromDiscriminatorValue';
import {createRelationFromDiscriminatorValue} from './createRelationFromDiscriminatorValue';
import {createSetFromDiscriminatorValue} from './createSetFromDiscriminatorValue';
import {createTermFromDiscriminatorValue} from './createTermFromDiscriminatorValue';
import {LocalizedDescription, LocalizedLabel, Relation, Set} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Term extends Entity implements Parsable {
    /** Children of current term.  */
    private _children?: Term[] | undefined;
    /** Date and time of term creation. Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** Description about term that is dependent on the languageTag.  */
    private _descriptions?: LocalizedDescription[] | undefined;
    /** Label metadata for a term.  */
    private _labels?: LocalizedLabel[] | undefined;
    /** Last date and time of term modification. Read-only.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** Collection of properties on the term.  */
    private _properties?: KeyValue[] | undefined;
    /** To indicate which terms are related to the current term as either pinned or reused.  */
    private _relations?: Relation[] | undefined;
    /** The [set] in which the term is created.  */
    private _set?: Set | undefined;
    /**
     * Gets the children property value. Children of current term.
     * @returns a term
     */
    public get children() {
        return this._children;
    };
    /**
     * Sets the children property value. Children of current term.
     * @param value Value to set for the children property.
     */
    public set children(value: Term[] | undefined) {
        this._children = value;
    };
    /**
     * Instantiates a new term and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Date and time of term creation. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Date and time of term creation. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the descriptions property value. Description about term that is dependent on the languageTag.
     * @returns a localizedDescription
     */
    public get descriptions() {
        return this._descriptions;
    };
    /**
     * Sets the descriptions property value. Description about term that is dependent on the languageTag.
     * @param value Value to set for the descriptions property.
     */
    public set descriptions(value: LocalizedDescription[] | undefined) {
        this._descriptions = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "children": (o, n) => { (o as unknown as Term).children = n.getCollectionOfObjectValues<Term>(createTermFromDiscriminatorValue); },
            "createdDateTime": (o, n) => { (o as unknown as Term).createdDateTime = n.getDateValue(); },
            "descriptions": (o, n) => { (o as unknown as Term).descriptions = n.getCollectionOfObjectValues<LocalizedDescription>(createLocalizedDescriptionFromDiscriminatorValue); },
            "labels": (o, n) => { (o as unknown as Term).labels = n.getCollectionOfObjectValues<LocalizedLabel>(createLocalizedLabelFromDiscriminatorValue); },
            "lastModifiedDateTime": (o, n) => { (o as unknown as Term).lastModifiedDateTime = n.getDateValue(); },
            "properties": (o, n) => { (o as unknown as Term).properties = n.getCollectionOfObjectValues<KeyValue>(createKeyValueFromDiscriminatorValue); },
            "relations": (o, n) => { (o as unknown as Term).relations = n.getCollectionOfObjectValues<Relation>(createRelationFromDiscriminatorValue); },
            "set": (o, n) => { (o as unknown as Term).set = n.getObjectValue<Set>(createSetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the labels property value. Label metadata for a term.
     * @returns a localizedLabel
     */
    public get labels() {
        return this._labels;
    };
    /**
     * Sets the labels property value. Label metadata for a term.
     * @param value Value to set for the labels property.
     */
    public set labels(value: LocalizedLabel[] | undefined) {
        this._labels = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. Last date and time of term modification. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Last date and time of term modification. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the properties property value. Collection of properties on the term.
     * @returns a keyValue
     */
    public get properties() {
        return this._properties;
    };
    /**
     * Sets the properties property value. Collection of properties on the term.
     * @param value Value to set for the properties property.
     */
    public set properties(value: KeyValue[] | undefined) {
        this._properties = value;
    };
    /**
     * Gets the relations property value. To indicate which terms are related to the current term as either pinned or reused.
     * @returns a relation
     */
    public get relations() {
        return this._relations;
    };
    /**
     * Sets the relations property value. To indicate which terms are related to the current term as either pinned or reused.
     * @param value Value to set for the relations property.
     */
    public set relations(value: Relation[] | undefined) {
        this._relations = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Term>("children", this.children);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeCollectionOfObjectValues<LocalizedDescription>("descriptions", this.descriptions);
        writer.writeCollectionOfObjectValues<LocalizedLabel>("labels", this.labels);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<KeyValue>("properties", this.properties);
        writer.writeCollectionOfObjectValues<Relation>("relations", this.relations);
        writer.writeObjectValue<Set>("set", this.set);
    };
    /**
     * Gets the set property value. The [set] in which the term is created.
     * @returns a set
     */
    public get set() {
        return this._set;
    };
    /**
     * Sets the set property value. The [set] in which the term is created.
     * @param value Value to set for the set property.
     */
    public set set(value: Set | undefined) {
        this._set = value;
    };
}
