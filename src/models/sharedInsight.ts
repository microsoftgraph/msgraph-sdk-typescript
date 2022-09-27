import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {createResourceVisualizationFromDiscriminatorValue} from './createResourceVisualizationFromDiscriminatorValue';
import {createSharingDetailFromDiscriminatorValue} from './createSharingDetailFromDiscriminatorValue';
import {Entity, ResourceReference, ResourceVisualization, SharingDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class SharedInsight extends Entity implements Parsable {
    /** Details about the shared item. Read only. */
    private _lastShared?: SharingDetail | undefined;
    /** The lastSharedMethod property */
    private _lastSharedMethod?: Entity | undefined;
    /** Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem. */
    private _resource?: Entity | undefined;
    /** Reference properties of the shared document, such as the url and type of the document. Read-only */
    private readonly _resourceReference?: ResourceReference | undefined;
    /** Properties that you can use to visualize the document in your experience. Read-only */
    private readonly _resourceVisualization?: ResourceVisualization | undefined;
    /** The sharingHistory property */
    private _sharingHistory?: SharingDetail[] | undefined;
    /**
     * Instantiates a new sharedInsight and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.sharedInsight";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "lastShared": n => { this.lastShared = n.getObjectValue<SharingDetail>(createSharingDetailFromDiscriminatorValue); },
            "lastSharedMethod": n => { this.lastSharedMethod = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "resource": n => { this.resource = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "resourceReference": n => { this.resourceReference = n.getObjectValue<ResourceReference>(createResourceReferenceFromDiscriminatorValue); },
            "resourceVisualization": n => { this.resourceVisualization = n.getObjectValue<ResourceVisualization>(createResourceVisualizationFromDiscriminatorValue); },
            "sharingHistory": n => { this.sharingHistory = n.getCollectionOfObjectValues<SharingDetail>(createSharingDetailFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastShared property value. Details about the shared item. Read only.
     * @returns a sharingDetail
     */
    public get lastShared() {
        return this._lastShared;
    };
    /**
     * Sets the lastShared property value. Details about the shared item. Read only.
     * @param value Value to set for the lastShared property.
     */
    public set lastShared(value: SharingDetail | undefined) {
        this._lastShared = value;
    };
    /**
     * Gets the lastSharedMethod property value. The lastSharedMethod property
     * @returns a entity
     */
    public get lastSharedMethod() {
        return this._lastSharedMethod;
    };
    /**
     * Sets the lastSharedMethod property value. The lastSharedMethod property
     * @param value Value to set for the lastSharedMethod property.
     */
    public set lastSharedMethod(value: Entity | undefined) {
        this._lastSharedMethod = value;
    };
    /**
     * Gets the resource property value. Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     * @returns a entity
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     * @param value Value to set for the resource property.
     */
    public set resource(value: Entity | undefined) {
        this._resource = value;
    };
    /**
     * Gets the resourceReference property value. Reference properties of the shared document, such as the url and type of the document. Read-only
     * @returns a resourceReference
     */
    public get resourceReference() {
        return this._resourceReference;
    };
    /**
     * Sets the resourceReference property value. Reference properties of the shared document, such as the url and type of the document. Read-only
     * @param value Value to set for the resourceReference property.
     */
    public set resourceReference(value: ResourceReference | undefined) {
        this._resourceReference = value;
    };
    /**
     * Gets the resourceVisualization property value. Properties that you can use to visualize the document in your experience. Read-only
     * @returns a resourceVisualization
     */
    public get resourceVisualization() {
        return this._resourceVisualization;
    };
    /**
     * Sets the resourceVisualization property value. Properties that you can use to visualize the document in your experience. Read-only
     * @param value Value to set for the resourceVisualization property.
     */
    public set resourceVisualization(value: ResourceVisualization | undefined) {
        this._resourceVisualization = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<SharingDetail>("lastShared", this.lastShared);
        writer.writeObjectValue<Entity>("lastSharedMethod", this.lastSharedMethod);
        writer.writeObjectValue<Entity>("resource", this.resource);
        writer.writeCollectionOfObjectValues<SharingDetail>("sharingHistory", this.sharingHistory);
    };
    /**
     * Gets the sharingHistory property value. The sharingHistory property
     * @returns a sharingDetail
     */
    public get sharingHistory() {
        return this._sharingHistory;
    };
    /**
     * Sets the sharingHistory property value. The sharingHistory property
     * @param value Value to set for the sharingHistory property.
     */
    public set sharingHistory(value: SharingDetail[] | undefined) {
        this._sharingHistory = value;
    };
}
