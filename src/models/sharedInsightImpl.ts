import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {createResourceVisualizationFromDiscriminatorValue} from './createResourceVisualizationFromDiscriminatorValue';
import {createSharingDetailFromDiscriminatorValue} from './createSharingDetailFromDiscriminatorValue';
import {Entity} from './entity';
import {EntityImpl, ResourceReferenceImpl, ResourceVisualizationImpl, SharingDetailImpl} from './index';
import {ResourceReference} from './resourceReference';
import {ResourceVisualization} from './resourceVisualization';
import {SharedInsight} from './sharedInsight';
import {SharingDetail} from './sharingDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class SharedInsightImpl extends EntityImpl implements SharedInsight {
    /** Details about the shared item. Read only. */
    private _lastShared?: SharingDetail | undefined;
    /** The lastSharedMethod property */
    private _lastSharedMethod?: Entity | undefined;
    /** Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem. */
    private _resource?: Entity | undefined;
    /** Reference properties of the shared document, such as the url and type of the document. Read-only */
    private _resourceReference?: ResourceReference | undefined;
    /** Properties that you can use to visualize the document in your experience. Read-only */
    private _resourceVisualization?: ResourceVisualization | undefined;
    /** The sharingHistory property */
    private _sharingHistory?: SharingDetail[] | undefined;
    /**
     * Instantiates a new sharedInsight and sets the default values.
     * @param sharedInsightParameterValue 
     */
    public constructor(sharedInsightParameterValue?: SharedInsight | undefined) {
        super(sharedInsightParameterValue);
        this._lastShared = sharedInsightParameterValue?.lastShared;
        this._lastSharedMethod = sharedInsightParameterValue?.lastSharedMethod;
        this._resource = sharedInsightParameterValue?.resource;
        this._resourceReference = sharedInsightParameterValue?.resourceReference;
        this._resourceVisualization = sharedInsightParameterValue?.resourceVisualization;
        this._sharingHistory = sharedInsightParameterValue?.sharingHistory;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "lastShared": n => { this.lastShared = n.getObjectValue<SharingDetailImpl>(createSharingDetailFromDiscriminatorValue); },
            "lastSharedMethod": n => { this.lastSharedMethod = n.getObjectValue<EntityImpl>(createEntityFromDiscriminatorValue); },
            "resource": n => { this.resource = n.getObjectValue<EntityImpl>(createEntityFromDiscriminatorValue); },
            "resourceReference": n => { this.resourceReference = n.getObjectValue<ResourceReferenceImpl>(createResourceReferenceFromDiscriminatorValue); },
            "resourceVisualization": n => { this.resourceVisualization = n.getObjectValue<ResourceVisualizationImpl>(createResourceVisualizationFromDiscriminatorValue); },
            "sharingHistory": n => { this.sharingHistory = n.getCollectionOfObjectValues<SharingDetailImpl>(createSharingDetailFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastShared property value. Details about the shared item. Read only.
     * @returns a SharingDetailInterface
     */
    public get lastShared() {
        return this._lastShared;
    };
    /**
     * Sets the lastShared property value. Details about the shared item. Read only.
     * @param value Value to set for the lastShared property.
     */
    public set lastShared(value: SharingDetail | undefined) {
        if(value) {
            this._lastShared = value instanceof SharingDetailImpl? value : new SharingDetailImpl(value);
        }
    };
    /**
     * Gets the lastSharedMethod property value. The lastSharedMethod property
     * @returns a EntityInterface
     */
    public get lastSharedMethod() {
        return this._lastSharedMethod;
    };
    /**
     * Sets the lastSharedMethod property value. The lastSharedMethod property
     * @param value Value to set for the lastSharedMethod property.
     */
    public set lastSharedMethod(value: Entity | undefined) {
        if(value) {
            this._lastSharedMethod = value instanceof EntityImpl? value : new EntityImpl(value);
        }
    };
    /**
     * Gets the resource property value. Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     * @returns a EntityInterface
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     * @param value Value to set for the resource property.
     */
    public set resource(value: Entity | undefined) {
        if(value) {
            this._resource = value instanceof EntityImpl? value : new EntityImpl(value);
        }
    };
    /**
     * Gets the resourceReference property value. Reference properties of the shared document, such as the url and type of the document. Read-only
     * @returns a ResourceReferenceInterface
     */
    public get resourceReference() {
        return this._resourceReference;
    };
    /**
     * Sets the resourceReference property value. Reference properties of the shared document, such as the url and type of the document. Read-only
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
        if(this.lastShared){
            writer.writeObjectValue<SharingDetailImpl>("lastShared", (!this.lastShared || this.lastShared instanceof SharingDetailImpl? this.lastShared : new SharingDetailImpl(this.lastShared)));
        }
        if(this.lastSharedMethod){
            writer.writeObjectValue<EntityImpl>("lastSharedMethod", (!this.lastSharedMethod || this.lastSharedMethod instanceof EntityImpl? this.lastSharedMethod : new EntityImpl(this.lastSharedMethod)));
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
        if(this.sharingHistory && this.sharingHistory.length != 0){        const sharingHistoryArrValue: SharingDetailImpl[] = [];
        this.sharingHistory?.forEach(element => {
            sharingHistoryArrValue.push((element instanceof SharingDetailImpl? element:new SharingDetailImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SharingDetailImpl>("sharingHistory", sharingHistoryArrValue);
        }
    };
    /**
     * Gets the sharingHistory property value. The sharingHistory property
     * @returns a SharingDetailInterface
     */
    public get sharingHistory() {
        return this._sharingHistory;
    };
    /**
     * Sets the sharingHistory property value. The sharingHistory property
     * @param value Value to set for the sharingHistory property.
     */
    public set sharingHistory(value: SharingDetail[] | undefined) {
        if(value) {
            const sharingHistoryArrValue: SharingDetailImpl[] = [];
            this.sharingHistory?.forEach(element => {
                sharingHistoryArrValue.push((element instanceof SharingDetailImpl? element:new SharingDetailImpl(element)));
            });
            this._sharingHistory = sharingHistoryArrValue;
        }
    };
}
