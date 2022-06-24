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

/** Casts the previous resource to group. */
export class SetImpl extends EntityImpl implements Set {
    /** Children terms of set in term [store]. */
    public children?: Term[] | undefined;
    /** Date and time of set creation. Read-only. */
    public createdDateTime?: Date | undefined;
    /** Description giving details on the term usage. */
    public description?: string | undefined;
    /** Name of the set for each languageTag. */
    public localizedNames?: LocalizedName[] | undefined;
    /** The parentGroup property */
    public parentGroup?: Group | undefined;
    /** Custom properties for the set. */
    public properties?: KeyValue[] | undefined;
    /** Indicates which terms have been pinned or reused directly under the set. */
    public relations?: Relation[] | undefined;
    /** All the terms under the set. */
    public terms?: Term[] | undefined;
    /**
     * Instantiates a new set and sets the default values.
     * @param setParameterValue 
     */
    public constructor(setParameterValue?: Set | undefined) {
        super(setParameterValue);
        const childrenArrValue: TermImpl[] = []; setParameterValue.children?.forEach(element => {childrenArrValue.push(element instanceof TermImpl? element : new TermImpl(element));});
        this.children = childrenArrValue;
        this.createdDateTime = setParameterValue?.createdDateTime;
        this.description = setParameterValue?.description;
        const localizedNamesArrValue: LocalizedNameImpl[] = []; setParameterValue.localizedNames?.forEach(element => {localizedNamesArrValue.push(element instanceof LocalizedNameImpl? element : new LocalizedNameImpl(element));});
        this.localizedNames = localizedNamesArrValue;
        this.parentGroup = setParameterValue?.parentGroup instanceof GroupImpl? setParameterValue?.parentGroup:new GroupImpl(setParameterValue?.parentGroup);
        const propertiesArrValue: KeyValueImpl[] = []; setParameterValue.properties?.forEach(element => {propertiesArrValue.push(element instanceof KeyValueImpl? element : new KeyValueImpl(element));});
        this.properties = propertiesArrValue;
        const relationsArrValue: RelationImpl[] = []; setParameterValue.relations?.forEach(element => {relationsArrValue.push(element instanceof RelationImpl? element : new RelationImpl(element));});
        this.relations = relationsArrValue;
        const termsArrValue: TermImpl[] = []; setParameterValue.terms?.forEach(element => {termsArrValue.push(element instanceof TermImpl? element : new TermImpl(element));});
        this.terms = termsArrValue;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.children && this.children.length != 0){        const childrenArrValue: TermImpl[] = []; this.children?.forEach(element => {childrenArrValue.push(element instanceof TermImpl? element : new TermImpl(element));});
            writer.writeCollectionOfObjectValues<TermImpl>("children", childrenArrValue);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.localizedNames && this.localizedNames.length != 0){        const localizedNamesArrValue: LocalizedNameImpl[] = []; this.localizedNames?.forEach(element => {localizedNamesArrValue.push(element instanceof LocalizedNameImpl? element : new LocalizedNameImpl(element));});
            writer.writeCollectionOfObjectValues<LocalizedNameImpl>("localizedNames", localizedNamesArrValue);
        }
        if(this.parentGroup){
            writer.writeObjectValue<GroupImpl>("parentGroup", new GroupImpl(this.parentGroup));
        }
        if(this.properties && this.properties.length != 0){        const propertiesArrValue: KeyValueImpl[] = []; this.properties?.forEach(element => {propertiesArrValue.push(element instanceof KeyValueImpl? element : new KeyValueImpl(element));});
            writer.writeCollectionOfObjectValues<KeyValueImpl>("properties", propertiesArrValue);
        }
        if(this.relations && this.relations.length != 0){        const relationsArrValue: RelationImpl[] = []; this.relations?.forEach(element => {relationsArrValue.push(element instanceof RelationImpl? element : new RelationImpl(element));});
            writer.writeCollectionOfObjectValues<RelationImpl>("relations", relationsArrValue);
        }
        if(this.terms && this.terms.length != 0){        const termsArrValue: TermImpl[] = []; this.terms?.forEach(element => {termsArrValue.push(element instanceof TermImpl? element : new TermImpl(element));});
            writer.writeCollectionOfObjectValues<TermImpl>("terms", termsArrValue);
        }
    };
}
