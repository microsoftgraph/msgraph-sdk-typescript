import {EntityImpl, KeyValueImpl} from '../';
import {createKeyValueFromDiscriminatorValue} from '../createKeyValueFromDiscriminatorValue';
import {KeyValue} from '../keyValue';
import {createLocalizedDescriptionFromDiscriminatorValue} from './createLocalizedDescriptionFromDiscriminatorValue';
import {createLocalizedLabelFromDiscriminatorValue} from './createLocalizedLabelFromDiscriminatorValue';
import {createRelationFromDiscriminatorValue} from './createRelationFromDiscriminatorValue';
import {createSetFromDiscriminatorValue} from './createSetFromDiscriminatorValue';
import {createTermFromDiscriminatorValue} from './createTermFromDiscriminatorValue';
import {LocalizedDescriptionImpl, LocalizedLabelImpl, RelationImpl, SetImpl} from './index';
import {LocalizedDescription} from './localizedDescription';
import {LocalizedLabel} from './localizedLabel';
import {Relation} from './relation';
import {Set} from './set';
import {Term} from './term';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class TermImpl extends EntityImpl implements Term {
    /** Children of current term. */
    public children?: Term[] | undefined;
    /** Date and time of term creation. Read-only. */
    public createdDateTime?: Date | undefined;
    /** Description about term that is dependent on the languageTag. */
    public descriptions?: LocalizedDescription[] | undefined;
    /** Label metadata for a term. */
    public labels?: LocalizedLabel[] | undefined;
    /** Last date and time of term modification. Read-only. */
    public lastModifiedDateTime?: Date | undefined;
    /** Collection of properties on the term. */
    public properties?: KeyValue[] | undefined;
    /** To indicate which terms are related to the current term as either pinned or reused. */
    public relations?: Relation[] | undefined;
    /** The [set] in which the term is created. */
    public set?: Set | undefined;
    /**
     * Instantiates a new term and sets the default values.
     * @param termParameterValue 
     */
    public constructor(termParameterValue?: Term | undefined) {
        super(termParameterValue);
        const childrenArrValue: TermImpl[] = []; this.children?.forEach(element => {childrenArrValue.push(element instanceof TermImpl? element : new TermImpl(element));});
        this.children = childrenArrValue;
        this.createdDateTime = termParameterValue?.createdDateTime;
        const descriptionsArrValue: LocalizedDescriptionImpl[] = []; this.descriptions?.forEach(element => {descriptionsArrValue.push(element instanceof LocalizedDescriptionImpl? element : new LocalizedDescriptionImpl(element));});
        this.descriptions = descriptionsArrValue;
        const labelsArrValue: LocalizedLabelImpl[] = []; this.labels?.forEach(element => {labelsArrValue.push(element instanceof LocalizedLabelImpl? element : new LocalizedLabelImpl(element));});
        this.labels = labelsArrValue;
        this.lastModifiedDateTime = termParameterValue?.lastModifiedDateTime;
        const propertiesArrValue: KeyValueImpl[] = []; this.properties?.forEach(element => {propertiesArrValue.push(element instanceof KeyValueImpl? element : new KeyValueImpl(element));});
        this.properties = propertiesArrValue;
        const relationsArrValue: RelationImpl[] = []; this.relations?.forEach(element => {relationsArrValue.push(element instanceof RelationImpl? element : new RelationImpl(element));});
        this.relations = relationsArrValue;
        this.set = termParameterValue?.set instanceof SetImpl? termParameterValue?.set:new SetImpl(termParameterValue?.set);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "children": n => { this.children = n.getCollectionOfObjectValues<TermImpl>(createTermFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "descriptions": n => { this.descriptions = n.getCollectionOfObjectValues<LocalizedDescriptionImpl>(createLocalizedDescriptionFromDiscriminatorValue); },
            "labels": n => { this.labels = n.getCollectionOfObjectValues<LocalizedLabelImpl>(createLocalizedLabelFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "properties": n => { this.properties = n.getCollectionOfObjectValues<KeyValueImpl>(createKeyValueFromDiscriminatorValue); },
            "relations": n => { this.relations = n.getCollectionOfObjectValues<RelationImpl>(createRelationFromDiscriminatorValue); },
            "set": n => { this.set = n.getObjectValue<SetImpl>(createSetFromDiscriminatorValue); },
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
        if(this.descriptions && this.descriptions.length != 0){        const descriptionsArrValue: LocalizedDescriptionImpl[] = []; this.descriptions?.forEach(element => {descriptionsArrValue.push(element instanceof LocalizedDescriptionImpl? element : new LocalizedDescriptionImpl(element));});
            writer.writeCollectionOfObjectValues<LocalizedDescriptionImpl>("descriptions", descriptionsArrValue);
        }
        if(this.labels && this.labels.length != 0){        const labelsArrValue: LocalizedLabelImpl[] = []; this.labels?.forEach(element => {labelsArrValue.push(element instanceof LocalizedLabelImpl? element : new LocalizedLabelImpl(element));});
            writer.writeCollectionOfObjectValues<LocalizedLabelImpl>("labels", labelsArrValue);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.properties && this.properties.length != 0){        const propertiesArrValue: KeyValueImpl[] = []; this.properties?.forEach(element => {propertiesArrValue.push(element instanceof KeyValueImpl? element : new KeyValueImpl(element));});
            writer.writeCollectionOfObjectValues<KeyValueImpl>("properties", propertiesArrValue);
        }
        if(this.relations && this.relations.length != 0){        const relationsArrValue: RelationImpl[] = []; this.relations?.forEach(element => {relationsArrValue.push(element instanceof RelationImpl? element : new RelationImpl(element));});
            writer.writeCollectionOfObjectValues<RelationImpl>("relations", relationsArrValue);
        }
        if(this.set){
            writer.writeObjectValue<SetImpl>("set", new SetImpl(this.set));
        }
    };
}
