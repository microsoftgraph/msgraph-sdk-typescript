import {Entity} from '../';
import {createSetFromDiscriminatorValue} from './createSetFromDiscriminatorValue';
import {Set} from './index';
import {TermGroupScope} from './termGroupScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class Group extends Entity implements Parsable {
    /** Date and time of the group creation. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** Description that gives details on the term usage. */
    private _description?: string | undefined;
    /** Name of the group. */
    private _displayName?: string | undefined;
    /** ID of the parent site of this group. */
    private _parentSiteId?: string | undefined;
    /** Returns the type of the group. Possible values are global, system, and siteCollection. */
    private _scope?: TermGroupScope | undefined;
    /** All sets under the group in a term [store]. */
    private _sets?: Set[] | undefined;
    /**
     * Instantiates a new group and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Date and time of the group creation. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Date and time of the group creation. Read-only.
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
     * Gets the displayName property value. Name of the group.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the group.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "parentSiteId": n => { this.parentSiteId = n.getStringValue(); },
            "scope": n => { this.scope = n.getEnumValue<TermGroupScope>(TermGroupScope); },
            "sets": n => { this.sets = n.getCollectionOfObjectValues<Set>(createSetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the parentSiteId property value. ID of the parent site of this group.
     * @returns a string
     */
    public get parentSiteId() {
        return this._parentSiteId;
    };
    /**
     * Sets the parentSiteId property value. ID of the parent site of this group.
     * @param value Value to set for the parentSiteId property.
     */
    public set parentSiteId(value: string | undefined) {
        this._parentSiteId = value;
    };
    /**
     * Gets the scope property value. Returns the type of the group. Possible values are global, system, and siteCollection.
     * @returns a termGroupScope
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. Returns the type of the group. Possible values are global, system, and siteCollection.
     * @param value Value to set for the scope property.
     */
    public set scope(value: TermGroupScope | undefined) {
        this._scope = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("parentSiteId", this.parentSiteId);
        writer.writeEnumValue<TermGroupScope>("scope", this.scope);
        writer.writeCollectionOfObjectValues<Set>("sets", this.sets);
    };
    /**
     * Gets the sets property value. All sets under the group in a term [store].
     * @returns a set
     */
    public get sets() {
        return this._sets;
    };
    /**
     * Sets the sets property value. All sets under the group in a term [store].
     * @param value Value to set for the sets property.
     */
    public set sets(value: Set[] | undefined) {
        this._sets = value;
    };
}
