import {Entity, KeyValue} from '../';
import {createKeyValueFromDiscriminatorValue} from '../createKeyValueFromDiscriminatorValue';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createLocalizedNameFromDiscriminatorValue} from './createLocalizedNameFromDiscriminatorValue';
import {createRelationFromDiscriminatorValue} from './createRelationFromDiscriminatorValue';
import {createTermFromDiscriminatorValue} from './createTermFromDiscriminatorValue';
import {Group, LocalizedName, Relation, Term} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Set extends Entity implements Parsable {
    /** Children terms of set in term [store]. */
    private _children?: Term[] | undefined;
    /** Date and time of set creation. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** Description that gives details on the term usage. */
    private _description?: string | undefined;
    /** Name of the set for each languageTag. */
    private _localizedNames?: LocalizedName[] | undefined;
    /** The parentGroup property */
    private _parentGroup?: Group | undefined;
    /** Custom properties for the set. */
    private _properties?: KeyValue[] | undefined;
    /** Indicates which terms have been pinned or reused directly under the set. */
    private _relations?: Relation[] | undefined;
    /** All the terms under the set. */
    private _terms?: Term[] | undefined;
    /**
     * Gets the children property value. Children terms of set in term [store].
     * @returns a term
     */
    public get children() {
        return this._children;
    };
    /**
     * Sets the children property value. Children terms of set in term [store].
     * @param value Value to set for the children property.
     */
    public set children(value: Term[] | undefined) {
        this._children = value;
    };
    /**
     * Instantiates a new set and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.termStore.set";
    };
    /**
     * Gets the createdDateTime property value. Date and time of set creation. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Date and time of set creation. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. Description that gives details on the term usage.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description that gives details on the term usage.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "children": n => { this.children = n.getCollectionOfObjectValues<Term>(createTermFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "localizedNames": n => { this.localizedNames = n.getCollectionOfObjectValues<LocalizedName>(createLocalizedNameFromDiscriminatorValue); },
            "parentGroup": n => { this.parentGroup = n.getObjectValue<Group>(createGroupFromDiscriminatorValue); },
            "properties": n => { this.properties = n.getCollectionOfObjectValues<KeyValue>(createKeyValueFromDiscriminatorValue); },
            "relations": n => { this.relations = n.getCollectionOfObjectValues<Relation>(createRelationFromDiscriminatorValue); },
            "terms": n => { this.terms = n.getCollectionOfObjectValues<Term>(createTermFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the localizedNames property value. Name of the set for each languageTag.
     * @returns a localizedName
     */
    public get localizedNames() {
        return this._localizedNames;
    };
    /**
     * Sets the localizedNames property value. Name of the set for each languageTag.
     * @param value Value to set for the localizedNames property.
     */
    public set localizedNames(value: LocalizedName[] | undefined) {
        this._localizedNames = value;
    };
    /**
     * Gets the parentGroup property value. The parentGroup property
     * @returns a group
     */
    public get parentGroup() {
        return this._parentGroup;
    };
    /**
     * Sets the parentGroup property value. The parentGroup property
     * @param value Value to set for the parentGroup property.
     */
    public set parentGroup(value: Group | undefined) {
        this._parentGroup = value;
    };
    /**
     * Gets the properties property value. Custom properties for the set.
     * @returns a keyValue
     */
    public get properties() {
        return this._properties;
    };
    /**
     * Sets the properties property value. Custom properties for the set.
     * @param value Value to set for the properties property.
     */
    public set properties(value: KeyValue[] | undefined) {
        this._properties = value;
    };
    /**
     * Gets the relations property value. Indicates which terms have been pinned or reused directly under the set.
     * @returns a relation
     */
    public get relations() {
        return this._relations;
    };
    /**
     * Sets the relations property value. Indicates which terms have been pinned or reused directly under the set.
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
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues<LocalizedName>("localizedNames", this.localizedNames);
        writer.writeObjectValue<Group>("parentGroup", this.parentGroup);
        writer.writeCollectionOfObjectValues<KeyValue>("properties", this.properties);
        writer.writeCollectionOfObjectValues<Relation>("relations", this.relations);
        writer.writeCollectionOfObjectValues<Term>("terms", this.terms);
    };
    /**
     * Gets the terms property value. All the terms under the set.
     * @returns a term
     */
    public get terms() {
        return this._terms;
    };
    /**
     * Sets the terms property value. All the terms under the set.
     * @param value Value to set for the terms property.
     */
    public set terms(value: Term[] | undefined) {
        this._terms = value;
    };
}
