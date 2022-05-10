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

export class SetImpl extends EntityImpl implements Parsable, Set {
    /** Children terms of set in term [store].  */
    children?: Term[] | undefined;
    /** Date and time of set creation. Read-only.  */
    createdDateTime?: Date | undefined;
    /** Description giving details on the term usage.  */
    description?: string | undefined;
    /** Name of the set for each languageTag.  */
    localizedNames?: LocalizedName[] | undefined;
    /** The parentGroup property  */
    parentGroup?: Group | undefined;
    /** Custom properties for the set.  */
    properties?: KeyValue[] | undefined;
    /** Indicates which terms have been pinned or reused directly under the set.  */
    relations?: Relation[] | undefined;
    /** All the terms under the set.  */
    terms?: Term[] | undefined;
    /**
     * Instantiates a new set and sets the default values.
     * @param setParameterValue 
     */
    public constructor(setParameterValue?: Set | undefined) {
        super();
        this.children = setParameterValue?.children ;
        this.createdDateTime = setParameterValue?.createdDateTime ;
        this.description = setParameterValue?.description ;
        this.localizedNames = setParameterValue?.localizedNames ;
        this.parentGroup = setParameterValue?.parentGroup ;
        this.properties = setParameterValue?.properties ;
        this.relations = setParameterValue?.relations ;
        this.terms = setParameterValue?.terms ;
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
        if(this.children){
        const childrenArrValue: TermImpl[] = []; this.children?.forEach(element => {childrenArrValue.push(new TermImpl(element));});
        writer.writeCollectionOfObjectValues<TermImpl>("children", childrenArrValue);
        }
        if(this.createdDateTime){
        if(this.createdDateTime)
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        if(this.description)
        writer.writeStringValue("description", this.description);
        }
        if(this.localizedNames){
        const localizedNamesArrValue: LocalizedNameImpl[] = []; this.localizedNames?.forEach(element => {localizedNamesArrValue.push(new LocalizedNameImpl(element));});
        writer.writeCollectionOfObjectValues<LocalizedNameImpl>("localizedNames", localizedNamesArrValue);
        }
        if(this.parentGroup){
        if(this.parentGroup)
        writer.writeObjectValue<GroupImpl>("parentGroup", new GroupImpl(this.parentGroup));
        }
        if(this.properties){
        const propertiesArrValue: KeyValueImpl[] = []; this.properties?.forEach(element => {propertiesArrValue.push(new KeyValueImpl(element));});
        writer.writeCollectionOfObjectValues<KeyValueImpl>("properties", propertiesArrValue);
        }
        if(this.relations){
        const relationsArrValue: RelationImpl[] = []; this.relations?.forEach(element => {relationsArrValue.push(new RelationImpl(element));});
        writer.writeCollectionOfObjectValues<RelationImpl>("relations", relationsArrValue);
        }
        if(this.terms){
        const termsArrValue: TermImpl[] = []; this.terms?.forEach(element => {termsArrValue.push(new TermImpl(element));});
        writer.writeCollectionOfObjectValues<TermImpl>("terms", termsArrValue);
        }
    };
}
