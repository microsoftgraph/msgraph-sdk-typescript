import {EntityImpl, KeyValueImpl} from '../';
import {createKeyValueFromDiscriminatorValue} from '../createKeyValueFromDiscriminatorValue';
import {KeyValue} from '../keyValue';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createLocalizedNameFromDiscriminatorValue} from './createLocalizedNameFromDiscriminatorValue';
import {createRelationFromDiscriminatorValue} from './createRelationFromDiscriminatorValue';
import {createTermFromDiscriminatorValue} from './createTermFromDiscriminatorValue';
import {Group} from './group';
import {GroupImpl, LocalizedNameImpl, RelationImpl, TermImpl} from './index';
import {LocalizedName} from './localizedName';
import {Relation} from './relation';
import {Set} from './set';
import {Term} from './term';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class SetImpl extends EntityImpl implements Set {
    /** Children terms of set in term [store]. */
    private _children?: Term[] | undefined;
    /** Date and time of set creation. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** Description giving details on the term usage. */
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
     * @returns a TermInterface
     */
    public get children() {
        return this._children;
    };
    /**
     * Sets the children property value. Children terms of set in term [store].
     * @param value Value to set for the children property.
     */
    public set children(value: Term[] | undefined) {
        if(value) {
            const childrenArrValue: TermImpl[] = [];
            this.children?.forEach(element => {
                childrenArrValue.push((element instanceof TermImpl? element:new TermImpl(element)));
            });
            this._children = childrenArrValue;
        }
    };
    /**
     * Instantiates a new set and sets the default values.
     * @param setParameterValue 
     */
    public constructor(setParameterValue?: Set | undefined) {
        super(setParameterValue);
        this._children = setParameterValue?.children;
        this._createdDateTime = setParameterValue?.createdDateTime;
        this._description = setParameterValue?.description;
        this._localizedNames = setParameterValue?.localizedNames;
        this._parentGroup = setParameterValue?.parentGroup;
        this._properties = setParameterValue?.properties;
        this._relations = setParameterValue?.relations;
        this._terms = setParameterValue?.terms;
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
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the description property value. Description giving details on the term usage.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description giving details on the term usage.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "children": n => { this.children = n.getCollectionOfObjectValues<TermImpl>(createTermFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "localizedNames": n => { this.localizedNames = n.getCollectionOfObjectValues<LocalizedNameImpl>(createLocalizedNameFromDiscriminatorValue); },
            "parentGroup": n => { this.parentGroup = n.getObjectValue<GroupImpl>(createGroupFromDiscriminatorValue); },
            "properties": n => { this.properties = n.getCollectionOfObjectValues<KeyValueImpl>(createKeyValueFromDiscriminatorValue); },
            "relations": n => { this.relations = n.getCollectionOfObjectValues<RelationImpl>(createRelationFromDiscriminatorValue); },
            "terms": n => { this.terms = n.getCollectionOfObjectValues<TermImpl>(createTermFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the localizedNames property value. Name of the set for each languageTag.
     * @returns a LocalizedNameInterface
     */
    public get localizedNames() {
        return this._localizedNames;
    };
    /**
     * Sets the localizedNames property value. Name of the set for each languageTag.
     * @param value Value to set for the localizedNames property.
     */
    public set localizedNames(value: LocalizedName[] | undefined) {
        if(value) {
            const localizedNamesArrValue: LocalizedNameImpl[] = [];
            this.localizedNames?.forEach(element => {
                localizedNamesArrValue.push((element instanceof LocalizedNameImpl? element:new LocalizedNameImpl(element)));
            });
            this._localizedNames = localizedNamesArrValue;
        }
    };
    /**
     * Gets the parentGroup property value. The parentGroup property
     * @returns a GroupInterface
     */
    public get parentGroup() {
        return this._parentGroup;
    };
    /**
     * Sets the parentGroup property value. The parentGroup property
     * @param value Value to set for the parentGroup property.
     */
    public set parentGroup(value: Group | undefined) {
        if(value) {
            this._parentGroup = value instanceof GroupImpl? value : new GroupImpl(value);
        }
    };
    /**
     * Gets the properties property value. Custom properties for the set.
     * @returns a KeyValueInterface
     */
    public get properties() {
        return this._properties;
    };
    /**
     * Sets the properties property value. Custom properties for the set.
     * @param value Value to set for the properties property.
     */
    public set properties(value: KeyValue[] | undefined) {
        if(value) {
            const propertiesArrValue: KeyValueImpl[] = [];
            this.properties?.forEach(element => {
                propertiesArrValue.push((element instanceof KeyValueImpl? element:new KeyValueImpl(element)));
            });
            this._properties = propertiesArrValue;
        }
    };
    /**
     * Gets the relations property value. Indicates which terms have been pinned or reused directly under the set.
     * @returns a RelationInterface
     */
    public get relations() {
        return this._relations;
    };
    /**
     * Sets the relations property value. Indicates which terms have been pinned or reused directly under the set.
     * @param value Value to set for the relations property.
     */
    public set relations(value: Relation[] | undefined) {
        if(value) {
            const relationsArrValue: RelationImpl[] = [];
            this.relations?.forEach(element => {
                relationsArrValue.push((element instanceof RelationImpl? element:new RelationImpl(element)));
            });
            this._relations = relationsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.children && this.children.length != 0){        const childrenArrValue: TermImpl[] = [];
        this.children?.forEach(element => {
            childrenArrValue.push((element instanceof TermImpl? element:new TermImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TermImpl>("children", childrenArrValue);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.localizedNames && this.localizedNames.length != 0){        const localizedNamesArrValue: LocalizedNameImpl[] = [];
        this.localizedNames?.forEach(element => {
            localizedNamesArrValue.push((element instanceof LocalizedNameImpl? element:new LocalizedNameImpl(element)));
        });
            writer.writeCollectionOfObjectValues<LocalizedNameImpl>("localizedNames", localizedNamesArrValue);
        }
        if(this.parentGroup){
            writer.writeObjectValue<GroupImpl>("parentGroup", (!this.parentGroup || this.parentGroup instanceof GroupImpl? this.parentGroup : new GroupImpl(this.parentGroup)));
        }
        if(this.properties && this.properties.length != 0){        const propertiesArrValue: KeyValueImpl[] = [];
        this.properties?.forEach(element => {
            propertiesArrValue.push((element instanceof KeyValueImpl? element:new KeyValueImpl(element)));
        });
            writer.writeCollectionOfObjectValues<KeyValueImpl>("properties", propertiesArrValue);
        }
        if(this.relations && this.relations.length != 0){        const relationsArrValue: RelationImpl[] = [];
        this.relations?.forEach(element => {
            relationsArrValue.push((element instanceof RelationImpl? element:new RelationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RelationImpl>("relations", relationsArrValue);
        }
        if(this.terms && this.terms.length != 0){        const termsArrValue: TermImpl[] = [];
        this.terms?.forEach(element => {
            termsArrValue.push((element instanceof TermImpl? element:new TermImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TermImpl>("terms", termsArrValue);
        }
    };
    /**
     * Gets the terms property value. All the terms under the set.
     * @returns a TermInterface
     */
    public get terms() {
        return this._terms;
    };
    /**
     * Sets the terms property value. All the terms under the set.
     * @param value Value to set for the terms property.
     */
    public set terms(value: Term[] | undefined) {
        if(value) {
            const termsArrValue: TermImpl[] = [];
            this.terms?.forEach(element => {
                termsArrValue.push((element instanceof TermImpl? element:new TermImpl(element)));
            });
            this._terms = termsArrValue;
        }
    };
}
