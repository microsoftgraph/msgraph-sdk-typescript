import {Entity} from '../entity';
import {KeyValue} from '../keyValue';
import {Group} from './group';
import {LocalizedName} from './localizedName';
import {Relation} from './relation';
import {Term} from './term';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Set extends Entity implements Parsable {
    /** Children terms of set in term [store].  */
    private _children?: Term[] | undefined;
    /** Date and time of set creation. Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** Description that gives details on the term usage.  */
    private _description?: string | undefined;
    /** Name of the set for each languageTag.  */
    private _localizedNames?: LocalizedName[] | undefined;
    private _parentGroup?: Group | undefined;
    /** Custom properties for the set.  */
    private _properties?: KeyValue[] | undefined;
    /** Indicates which terms have been pinned or reused directly under the set.  */
    private _relations?: Relation[] | undefined;
    /** All the terms under the set.  */
    private _terms?: Term[] | undefined;
    /**
     * Instantiates a new set and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the children property value. Children terms of set in term [store].
     * @returns a term
     */
    public get children() {
        return this._children;
    };
    /**
     * Gets the createdDateTime property value. Date and time of set creation. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the description property value. Description that gives details on the term usage.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the localizedNames property value. Name of the set for each languageTag.
     * @returns a localizedName
     */
    public get localizedNames() {
        return this._localizedNames;
    };
    /**
     * Gets the parentGroup property value. 
     * @returns a group
     */
    public get parentGroup() {
        return this._parentGroup;
    };
    /**
     * Gets the properties property value. Custom properties for the set.
     * @returns a keyValue
     */
    public get properties() {
        return this._properties;
    };
    /**
     * Gets the relations property value. Indicates which terms have been pinned or reused directly under the set.
     * @returns a relation
     */
    public get relations() {
        return this._relations;
    };
    /**
     * Gets the terms property value. All the terms under the set.
     * @returns a term
     */
    public get terms() {
        return this._terms;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["children", (o, n) => { (o as unknown as Set).children = n.getCollectionOfObjectValues<Term>(Term); }],
            ["createdDateTime", (o, n) => { (o as unknown as Set).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as Set).description = n.getStringValue(); }],
            ["localizedNames", (o, n) => { (o as unknown as Set).localizedNames = n.getCollectionOfObjectValues<LocalizedName>(LocalizedName); }],
            ["parentGroup", (o, n) => { (o as unknown as Set).parentGroup = n.getObjectValue<Group>(Group); }],
            ["properties", (o, n) => { (o as unknown as Set).properties = n.getCollectionOfObjectValues<KeyValue>(KeyValue); }],
            ["relations", (o, n) => { (o as unknown as Set).relations = n.getCollectionOfObjectValues<Relation>(Relation); }],
            ["terms", (o, n) => { (o as unknown as Set).terms = n.getCollectionOfObjectValues<Term>(Term); }],
        ]);
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
     * Sets the children property value. Children terms of set in term [store].
     * @param value Value to set for the children property.
     */
    public set children(value: Term[] | undefined) {
        this._children = value;
    };
    /**
     * Sets the createdDateTime property value. Date and time of set creation. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the description property value. Description that gives details on the term usage.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the localizedNames property value. Name of the set for each languageTag.
     * @param value Value to set for the localizedNames property.
     */
    public set localizedNames(value: LocalizedName[] | undefined) {
        this._localizedNames = value;
    };
    /**
     * Sets the parentGroup property value. 
     * @param value Value to set for the parentGroup property.
     */
    public set parentGroup(value: Group | undefined) {
        this._parentGroup = value;
    };
    /**
     * Sets the properties property value. Custom properties for the set.
     * @param value Value to set for the properties property.
     */
    public set properties(value: KeyValue[] | undefined) {
        this._properties = value;
    };
    /**
     * Sets the relations property value. Indicates which terms have been pinned or reused directly under the set.
     * @param value Value to set for the relations property.
     */
    public set relations(value: Relation[] | undefined) {
        this._relations = value;
    };
    /**
     * Sets the terms property value. All the terms under the set.
     * @param value Value to set for the terms property.
     */
    public set terms(value: Term[] | undefined) {
        this._terms = value;
    };
}