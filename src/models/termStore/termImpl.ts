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

/** Casts the previous resource to group. */
export class TermImpl extends EntityImpl implements Term {
    /** Children of current term. */
    private _children?: Term[] | undefined;
    /** Date and time of term creation. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** Description about term that is dependent on the languageTag. */
    private _descriptions?: LocalizedDescription[] | undefined;
    /** Label metadata for a term. */
    private _labels?: LocalizedLabel[] | undefined;
    /** Last date and time of term modification. Read-only. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Collection of properties on the term. */
    private _properties?: KeyValue[] | undefined;
    /** To indicate which terms are related to the current term as either pinned or reused. */
    private _relations?: Relation[] | undefined;
    /** The [set] in which the term is created. */
    private _set?: Set | undefined;
    /**
     * Gets the children property value. Children of current term.
     * @returns a TermInterface
     */
    public get children() {
        return this._children;
    };
    /**
     * Sets the children property value. Children of current term.
     * @param value Value to set for the children property.
     */
    public set children(value: Term[] | undefined) {
        if(value) {
            const childrenArrValue: TermImpl[] = [];
            this.children?.forEach(element => {
                childrenArrValue.push((element instanceof TermImpl? element as TermImpl:new TermImpl(element)));
            });
            this._children = childrenArrValue;
        }
    };
    /**
     * Instantiates a new term and sets the default values.
     * @param termParameterValue 
     */
    public constructor(termParameterValue?: Term | undefined) {
        super(termParameterValue);
        this._children = termParameterValue?.children;
        this._createdDateTime = termParameterValue?.createdDateTime;
        this._descriptions = termParameterValue?.descriptions;
        this._labels = termParameterValue?.labels;
        this._lastModifiedDateTime = termParameterValue?.lastModifiedDateTime;
        this._properties = termParameterValue?.properties;
        this._relations = termParameterValue?.relations;
        this._set = termParameterValue?.set;
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
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the descriptions property value. Description about term that is dependent on the languageTag.
     * @returns a LocalizedDescriptionInterface
     */
    public get descriptions() {
        return this._descriptions;
    };
    /**
     * Sets the descriptions property value. Description about term that is dependent on the languageTag.
     * @param value Value to set for the descriptions property.
     */
    public set descriptions(value: LocalizedDescription[] | undefined) {
        if(value) {
            const descriptionsArrValue: LocalizedDescriptionImpl[] = [];
            this.descriptions?.forEach(element => {
                descriptionsArrValue.push((element instanceof LocalizedDescriptionImpl? element as LocalizedDescriptionImpl:new LocalizedDescriptionImpl(element)));
            });
            this._descriptions = descriptionsArrValue;
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
            "descriptions": n => { this.descriptions = n.getCollectionOfObjectValues<LocalizedDescriptionImpl>(createLocalizedDescriptionFromDiscriminatorValue); },
            "labels": n => { this.labels = n.getCollectionOfObjectValues<LocalizedLabelImpl>(createLocalizedLabelFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "properties": n => { this.properties = n.getCollectionOfObjectValues<KeyValueImpl>(createKeyValueFromDiscriminatorValue); },
            "relations": n => { this.relations = n.getCollectionOfObjectValues<RelationImpl>(createRelationFromDiscriminatorValue); },
            "set": n => { this.set = n.getObjectValue<SetImpl>(createSetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the labels property value. Label metadata for a term.
     * @returns a LocalizedLabelInterface
     */
    public get labels() {
        return this._labels;
    };
    /**
     * Sets the labels property value. Label metadata for a term.
     * @param value Value to set for the labels property.
     */
    public set labels(value: LocalizedLabel[] | undefined) {
        if(value) {
            const labelsArrValue: LocalizedLabelImpl[] = [];
            this.labels?.forEach(element => {
                labelsArrValue.push((element instanceof LocalizedLabelImpl? element as LocalizedLabelImpl:new LocalizedLabelImpl(element)));
            });
            this._labels = labelsArrValue;
        }
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
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the properties property value. Collection of properties on the term.
     * @returns a KeyValueInterface
     */
    public get properties() {
        return this._properties;
    };
    /**
     * Sets the properties property value. Collection of properties on the term.
     * @param value Value to set for the properties property.
     */
    public set properties(value: KeyValue[] | undefined) {
        if(value) {
            const propertiesArrValue: KeyValueImpl[] = [];
            this.properties?.forEach(element => {
                propertiesArrValue.push((element instanceof KeyValueImpl? element as KeyValueImpl:new KeyValueImpl(element)));
            });
            this._properties = propertiesArrValue;
        }
    };
    /**
     * Gets the relations property value. To indicate which terms are related to the current term as either pinned or reused.
     * @returns a RelationInterface
     */
    public get relations() {
        return this._relations;
    };
    /**
     * Sets the relations property value. To indicate which terms are related to the current term as either pinned or reused.
     * @param value Value to set for the relations property.
     */
    public set relations(value: Relation[] | undefined) {
        if(value) {
            const relationsArrValue: RelationImpl[] = [];
            this.relations?.forEach(element => {
                relationsArrValue.push((element instanceof RelationImpl? element as RelationImpl:new RelationImpl(element)));
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
            childrenArrValue.push((element instanceof TermImpl? element as TermImpl:new TermImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TermImpl>("children", childrenArrValue);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.descriptions && this.descriptions.length != 0){        const descriptionsArrValue: LocalizedDescriptionImpl[] = [];
        this.descriptions?.forEach(element => {
            descriptionsArrValue.push((element instanceof LocalizedDescriptionImpl? element as LocalizedDescriptionImpl:new LocalizedDescriptionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<LocalizedDescriptionImpl>("descriptions", descriptionsArrValue);
        }
        if(this.labels && this.labels.length != 0){        const labelsArrValue: LocalizedLabelImpl[] = [];
        this.labels?.forEach(element => {
            labelsArrValue.push((element instanceof LocalizedLabelImpl? element as LocalizedLabelImpl:new LocalizedLabelImpl(element)));
        });
            writer.writeCollectionOfObjectValues<LocalizedLabelImpl>("labels", labelsArrValue);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.properties && this.properties.length != 0){        const propertiesArrValue: KeyValueImpl[] = [];
        this.properties?.forEach(element => {
            propertiesArrValue.push((element instanceof KeyValueImpl? element as KeyValueImpl:new KeyValueImpl(element)));
        });
            writer.writeCollectionOfObjectValues<KeyValueImpl>("properties", propertiesArrValue);
        }
        if(this.relations && this.relations.length != 0){        const relationsArrValue: RelationImpl[] = [];
        this.relations?.forEach(element => {
            relationsArrValue.push((element instanceof RelationImpl? element as RelationImpl:new RelationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RelationImpl>("relations", relationsArrValue);
        }
        if(this.set){
            writer.writeObjectValue<SetImpl>("set", (this.set instanceof SetImpl? this.set as SetImpl: new SetImpl(this.set)));
        }
    };
    /**
     * Gets the set property value. The [set] in which the term is created.
     * @returns a SetInterface
     */
    public get set() {
        return this._set;
    };
    /**
     * Sets the set property value. The [set] in which the term is created.
     * @param value Value to set for the set property.
     */
    public set set(value: Set | undefined) {
        if(value) {
            this._set = value instanceof SetImpl? value as SetImpl: new SetImpl(value);
        }
    };
}
