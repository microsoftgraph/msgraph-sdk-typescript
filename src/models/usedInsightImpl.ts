import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {createResourceVisualizationFromDiscriminatorValue} from './createResourceVisualizationFromDiscriminatorValue';
import {createUsageDetailsFromDiscriminatorValue} from './createUsageDetailsFromDiscriminatorValue';
import {Entity} from './entity';
import {EntityImpl, ResourceReferenceImpl, ResourceVisualizationImpl, UsageDetailsImpl} from './index';
import {ResourceReference} from './resourceReference';
import {ResourceVisualization} from './resourceVisualization';
import {UsageDetails} from './usageDetails';
import {UsedInsight} from './usedInsight';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class UsedInsightImpl extends EntityImpl implements UsedInsight {
    /** Information about when the item was last viewed or modified by the user. Read only. */
    private _lastUsed?: UsageDetails | undefined;
    /** Used for navigating to the item that was used. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem. */
    private _resource?: Entity | undefined;
    /** Reference properties of the used document, such as the url and type of the document. Read-only */
    private _resourceReference?: ResourceReference | undefined;
    /** Properties that you can use to visualize the document in your experience. Read-only */
    private _resourceVisualization?: ResourceVisualization | undefined;
    /**
     * Instantiates a new usedInsight and sets the default values.
     * @param usedInsightParameterValue 
     */
    public constructor(usedInsightParameterValue?: UsedInsight | undefined) {
        super(usedInsightParameterValue);
        this._lastUsed = usedInsightParameterValue?.lastUsed;
        this._resource = usedInsightParameterValue?.resource;
        this._resourceReference = usedInsightParameterValue?.resourceReference;
        this._resourceVisualization = usedInsightParameterValue?.resourceVisualization;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "lastUsed": n => { this.lastUsed = n.getObjectValue<UsageDetailsImpl>(createUsageDetailsFromDiscriminatorValue); },
            "resource": n => { this.resource = n.getObjectValue<EntityImpl>(createEntityFromDiscriminatorValue); },
            "resourceReference": n => { this.resourceReference = n.getObjectValue<ResourceReferenceImpl>(createResourceReferenceFromDiscriminatorValue); },
            "resourceVisualization": n => { this.resourceVisualization = n.getObjectValue<ResourceVisualizationImpl>(createResourceVisualizationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastUsed property value. Information about when the item was last viewed or modified by the user. Read only.
     * @returns a UsageDetailsInterface
     */
    public get lastUsed() {
        return this._lastUsed;
    };
    /**
     * Sets the lastUsed property value. Information about when the item was last viewed or modified by the user. Read only.
     * @param value Value to set for the lastUsed property.
     */
    public set lastUsed(value: UsageDetails | undefined) {
        if(value) {
            this._lastUsed = value instanceof UsageDetailsImpl? value : new UsageDetailsImpl(value);
        }
    };
    /**
     * Gets the resource property value. Used for navigating to the item that was used. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     * @returns a EntityInterface
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. Used for navigating to the item that was used. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     * @param value Value to set for the resource property.
     */
    public set resource(value: Entity | undefined) {
        if(value) {
            this._resource = value instanceof EntityImpl? value : new EntityImpl(value);
        }
    };
    /**
     * Gets the resourceReference property value. Reference properties of the used document, such as the url and type of the document. Read-only
     * @returns a ResourceReferenceInterface
     */
    public get resourceReference() {
        return this._resourceReference;
    };
    /**
     * Sets the resourceReference property value. Reference properties of the used document, such as the url and type of the document. Read-only
     * @param value Value to set for the resourceReference property.
     */
    public set resourceReference(value: ResourceReference | undefined) {
        if(value) {
            this._resourceReference = value instanceof ResourceReferenceImpl? value : new ResourceReferenceImpl(value);
        }
    };
    /**
     * Gets the resourceVisualization property value. Properties that you can use to visualize the document in your experience. Read-only
     * @returns a ResourceVisualizationInterface
     */
    public get resourceVisualization() {
        return this._resourceVisualization;
    };
    /**
     * Sets the resourceVisualization property value. Properties that you can use to visualize the document in your experience. Read-only
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
        if(this.lastUsed){
            writer.writeObjectValue<UsageDetailsImpl>("lastUsed", (!this.lastUsed || this.lastUsed instanceof UsageDetailsImpl? this.lastUsed : new UsageDetailsImpl(this.lastUsed)));
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
    };
}
