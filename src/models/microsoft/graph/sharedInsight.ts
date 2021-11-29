import {Entity} from './entity';
import {ResourceReference} from './resourceReference';
import {ResourceVisualization} from './resourceVisualization';
import {SharingDetail} from './sharingDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharedInsight extends Entity implements Parsable {
    /** Details about the shared item. Read only.  */
    private _lastShared?: SharingDetail | undefined;
    private _lastSharedMethod?: Entity | undefined;
    /** Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.  */
    private _resource?: Entity | undefined;
    /** Reference properties of the shared document, such as the url and type of the document. Read-only  */
    private _resourceReference?: ResourceReference | undefined;
    /** Properties that you can use to visualize the document in your experience. Read-only  */
    private _resourceVisualization?: ResourceVisualization | undefined;
    private _sharingHistory?: SharingDetail[] | undefined;
    /**
     * Instantiates a new sharedInsight and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the lastShared property value. Details about the shared item. Read only.
     * @returns a sharingDetail
     */
    public get lastShared() {
        return this._lastShared;
    };
    /**
     * Gets the lastSharedMethod property value. 
     * @returns a entity
     */
    public get lastSharedMethod() {
        return this._lastSharedMethod;
    };
    /**
     * Gets the resource property value. Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     * @returns a entity
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Gets the resourceReference property value. Reference properties of the shared document, such as the url and type of the document. Read-only
     * @returns a resourceReference
     */
    public get resourceReference() {
        return this._resourceReference;
    };
    /**
     * Gets the resourceVisualization property value. Properties that you can use to visualize the document in your experience. Read-only
     * @returns a resourceVisualization
     */
    public get resourceVisualization() {
        return this._resourceVisualization;
    };
    /**
     * Gets the sharingHistory property value. 
     * @returns a sharingDetail
     */
    public get sharingHistory() {
        return this._sharingHistory;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["lastShared", (o, n) => { (o as unknown as SharedInsight).lastShared = n.getObjectValue<SharingDetail>(SharingDetail); }],
            ["lastSharedMethod", (o, n) => { (o as unknown as SharedInsight).lastSharedMethod = n.getObjectValue<Entity>(Entity); }],
            ["resource", (o, n) => { (o as unknown as SharedInsight).resource = n.getObjectValue<Entity>(Entity); }],
            ["resourceReference", (o, n) => { (o as unknown as SharedInsight).resourceReference = n.getObjectValue<ResourceReference>(ResourceReference); }],
            ["resourceVisualization", (o, n) => { (o as unknown as SharedInsight).resourceVisualization = n.getObjectValue<ResourceVisualization>(ResourceVisualization); }],
            ["sharingHistory", (o, n) => { (o as unknown as SharedInsight).sharingHistory = n.getCollectionOfObjectValues<SharingDetail>(SharingDetail); }],
        ]);
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
        writer.writeCollectionOfObjectValues<SharingDetail>("sharingHistory", this.sharingHistory);
    };
    /**
     * Sets the lastShared property value. Details about the shared item. Read only.
     * @param value Value to set for the lastShared property.
     */
    public set lastShared(value: SharingDetail | undefined) {
        this._lastShared = value;
    };
    /**
     * Sets the lastSharedMethod property value. 
     * @param value Value to set for the lastSharedMethod property.
     */
    public set lastSharedMethod(value: Entity | undefined) {
        this._lastSharedMethod = value;
    };
    /**
     * Sets the resource property value. Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     * @param value Value to set for the resource property.
     */
    public set resource(value: Entity | undefined) {
        this._resource = value;
    };
    /**
     * Sets the resourceReference property value. Reference properties of the shared document, such as the url and type of the document. Read-only
     * @param value Value to set for the resourceReference property.
     */
    public set resourceReference(value: ResourceReference | undefined) {
        this._resourceReference = value;
    };
    /**
     * Sets the resourceVisualization property value. Properties that you can use to visualize the document in your experience. Read-only
     * @param value Value to set for the resourceVisualization property.
     */
    public set resourceVisualization(value: ResourceVisualization | undefined) {
        this._resourceVisualization = value;
    };
    /**
     * Sets the sharingHistory property value. 
     * @param value Value to set for the sharingHistory property.
     */
    public set sharingHistory(value: SharingDetail[] | undefined) {
        this._sharingHistory = value;
    };
}
