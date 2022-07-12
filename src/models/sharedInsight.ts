import {AdminMember1, Entity, ResourceReference, ResourceVisualization, SharingDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class SharedInsight extends Entity implements Parsable {
    /** Details about the shared item. Read only. */
    private _lastShared?: SharingDetail | AdminMember1 | undefined;
    /** The lastSharedMethod property */
    private _lastSharedMethod?: Entity | AdminMember1 | undefined;
    /** Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem. */
    private _resource?: Entity | AdminMember1 | undefined;
    /** Reference properties of the shared document, such as the url and type of the document. Read-only */
    private _resourceReference?: ResourceReference | AdminMember1 | undefined;
    /** Properties that you can use to visualize the document in your experience. Read-only */
    private _resourceVisualization?: ResourceVisualization | AdminMember1 | undefined;
    /** The sharingHistory property */
    private _sharingHistory?: SharingDetail | AdminMember1[] | undefined;
    /**
     * Instantiates a new sharedInsight and sets the default values.
     */
    public constructor() {
        super();
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
            "sharingHistory": n => { this.sharingHistory = n.getObjectValue<SharingDetail>(createSharingDetailFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastShared property value. Details about the shared item. Read only.
     * @returns a admin
     */
    public get lastShared() {
        return this._lastShared;
    };
    /**
     * Sets the lastShared property value. Details about the shared item. Read only.
     * @param value Value to set for the lastShared property.
     */
    public set lastShared(value: SharingDetail | AdminMember1 | undefined) {
        this._lastShared = value;
    };
    /**
     * Gets the lastSharedMethod property value. The lastSharedMethod property
     * @returns a admin
     */
    public get lastSharedMethod() {
        return this._lastSharedMethod;
    };
    /**
     * Sets the lastSharedMethod property value. The lastSharedMethod property
     * @param value Value to set for the lastSharedMethod property.
     */
    public set lastSharedMethod(value: Entity | AdminMember1 | undefined) {
        this._lastSharedMethod = value;
    };
    /**
     * Gets the resource property value. Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     * @returns a admin
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     * @param value Value to set for the resource property.
     */
    public set resource(value: Entity | AdminMember1 | undefined) {
        this._resource = value;
    };
    /**
     * Gets the resourceReference property value. Reference properties of the shared document, such as the url and type of the document. Read-only
     * @returns a admin
     */
    public get resourceReference() {
        return this._resourceReference;
    };
    /**
     * Sets the resourceReference property value. Reference properties of the shared document, such as the url and type of the document. Read-only
     * @param value Value to set for the resourceReference property.
     */
    public set resourceReference(value: ResourceReference | AdminMember1 | undefined) {
        this._resourceReference = value;
    };
    /**
     * Gets the resourceVisualization property value. Properties that you can use to visualize the document in your experience. Read-only
     * @returns a admin
     */
    public get resourceVisualization() {
        return this._resourceVisualization;
    };
    /**
     * Sets the resourceVisualization property value. Properties that you can use to visualize the document in your experience. Read-only
     * @param value Value to set for the resourceVisualization property.
     */
    public set resourceVisualization(value: ResourceVisualization | AdminMember1 | undefined) {
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
        writer.writeObjectValue<ResourceReference>("resourceReference", this.resourceReference);
        writer.writeObjectValue<ResourceVisualization>("resourceVisualization", this.resourceVisualization);
        writer.writeObjectValue<SharingDetail>("sharingHistory", this.sharingHistory);
    };
    /**
     * Gets the sharingHistory property value. The sharingHistory property
     * @returns a admin
     */
    public get sharingHistory() {
        return this._sharingHistory;
    };
    /**
     * Sets the sharingHistory property value. The sharingHistory property
     * @param value Value to set for the sharingHistory property.
     */
    public set sharingHistory(value: SharingDetail | AdminMember1[] | undefined) {
        this._sharingHistory = value;
    };
}
