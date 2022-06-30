import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {createResourceVisualizationFromDiscriminatorValue} from './createResourceVisualizationFromDiscriminatorValue';
import {Entity} from './entity';
import {EntityImpl, ResourceReferenceImpl, ResourceVisualizationImpl} from './index';
import {ResourceReference} from './resourceReference';
import {ResourceVisualization} from './resourceVisualization';
import {Trending} from './trending';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class TrendingImpl extends EntityImpl implements Trending {
    /** The lastModifiedDateTime property */
    private _lastModifiedDateTime?: Date | undefined;
    /** Used for navigating to the trending document. */
    private _resource?: Entity | undefined;
    /** Reference properties of the trending document, such as the url and type of the document. */
    private _resourceReference?: ResourceReference | undefined;
    /** Properties that you can use to visualize the document in your experience. */
    private _resourceVisualization?: ResourceVisualization | undefined;
    /** Value indicating how much the document is currently trending. The larger the number, the more the document is currently trending around the user (the more relevant it is). Returned documents are sorted by this value. */
    private _weight?: number | undefined;
    /**
     * Instantiates a new trending and sets the default values.
     * @param trendingParameterValue 
     */
    public constructor(trendingParameterValue?: Trending | undefined) {
        super(trendingParameterValue);
        this._lastModifiedDateTime = trendingParameterValue?.lastModifiedDateTime;
        this._resource = trendingParameterValue?.resource;
        this._resourceReference = trendingParameterValue?.resourceReference;
        this._resourceVisualization = trendingParameterValue?.resourceVisualization;
        this._weight = trendingParameterValue?.weight;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "resource": n => { this.resource = n.getObjectValue<EntityImpl>(createEntityFromDiscriminatorValue); },
            "resourceReference": n => { this.resourceReference = n.getObjectValue<ResourceReferenceImpl>(createResourceReferenceFromDiscriminatorValue); },
            "resourceVisualization": n => { this.resourceVisualization = n.getObjectValue<ResourceVisualizationImpl>(createResourceVisualizationFromDiscriminatorValue); },
            "weight": n => { this.weight = n.getNumberValue(); },
        };
    };
    /**
     * Gets the lastModifiedDateTime property value. The lastModifiedDateTime property
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The lastModifiedDateTime property
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the resource property value. Used for navigating to the trending document.
     * @returns a EntityInterface
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. Used for navigating to the trending document.
     * @param value Value to set for the resource property.
     */
    public set resource(value: Entity | undefined) {
        if(value) {
            this._resource = value instanceof EntityImpl? value : new EntityImpl(value);
        }
    };
    /**
     * Gets the resourceReference property value. Reference properties of the trending document, such as the url and type of the document.
     * @returns a ResourceReferenceInterface
     */
    public get resourceReference() {
        return this._resourceReference;
    };
    /**
     * Sets the resourceReference property value. Reference properties of the trending document, such as the url and type of the document.
     * @param value Value to set for the resourceReference property.
     */
    public set resourceReference(value: ResourceReference | undefined) {
        if(value) {
            this._resourceReference = value instanceof ResourceReferenceImpl? value : new ResourceReferenceImpl(value);
        }
    };
    /**
     * Gets the resourceVisualization property value. Properties that you can use to visualize the document in your experience.
     * @returns a ResourceVisualizationInterface
     */
    public get resourceVisualization() {
        return this._resourceVisualization;
    };
    /**
     * Sets the resourceVisualization property value. Properties that you can use to visualize the document in your experience.
     * @param value Value to set for the resourceVisualization property.
     */
    public set resourceVisualization(value: ResourceVisualization | undefined) {
        if(value) {
            this._resourceVisualization = value instanceof ResourceVisualizationImpl? value : new ResourceVisualizationImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.resource){
            writer.writeObjectValue<EntityImpl>("resource", (!this.resource || this.resource instanceof EntityImpl? this.resource : new EntityImpl(this.resource)));
        }
        if(this.resourceReference){
            writer.writeObjectValue<ResourceReferenceImpl>("resourceReference", (!this.resourceReference || this.resourceReference instanceof ResourceReferenceImpl? this.resourceReference : new ResourceReferenceImpl(this.resourceReference)));
        }
        if(this.resourceVisualization){
            writer.writeObjectValue<ResourceVisualizationImpl>("resourceVisualization", (!this.resourceVisualization || this.resourceVisualization instanceof ResourceVisualizationImpl? this.resourceVisualization : new ResourceVisualizationImpl(this.resourceVisualization)));
        }
        if(this.weight){
            writer.writeNumberValue("weight", this.weight);
        }
    };
    /**
     * Gets the weight property value. Value indicating how much the document is currently trending. The larger the number, the more the document is currently trending around the user (the more relevant it is). Returned documents are sorted by this value.
     * @returns a double
     */
    public get weight() {
        return this._weight;
    };
    /**
     * Sets the weight property value. Value indicating how much the document is currently trending. The larger the number, the more the document is currently trending around the user (the more relevant it is). Returned documents are sorted by this value.
     * @param value Value to set for the weight property.
     */
    public set weight(value: number | undefined) {
        if(value) {
            this._weight = value;
        }
    };
}
