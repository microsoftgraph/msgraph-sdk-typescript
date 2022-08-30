import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createServiceAnnouncementAttachmentFromDiscriminatorValue} from './createServiceAnnouncementAttachmentFromDiscriminatorValue';
import {createServiceUpdateMessageViewpointFromDiscriminatorValue} from './createServiceUpdateMessageViewpointFromDiscriminatorValue';
import {ItemBody, ServiceAnnouncementAttachment, ServiceAnnouncementBase, ServiceUpdateMessageViewpoint} from './index';
import {ServiceUpdateCategory} from './serviceUpdateCategory';
import {ServiceUpdateSeverity} from './serviceUpdateSeverity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceUpdateMessage extends ServiceAnnouncementBase implements Parsable {
    /** The expected deadline of the action for the message. */
    private _actionRequiredByDateTime?: Date | undefined;
    /** A collection of serviceAnnouncementAttachments. */
    private _attachments?: ServiceAnnouncementAttachment[] | undefined;
    /** The zip file that contains all attachments for a message. */
    private _attachmentsArchive?: string | undefined;
    /** The body property */
    private _body?: ItemBody | undefined;
    /** The category property */
    private _category?: ServiceUpdateCategory | undefined;
    /** Indicates whether the message has any attachment. */
    private _hasAttachments?: boolean | undefined;
    /** Indicates whether the message describes a major update for the service. */
    private _isMajorChange?: boolean | undefined;
    /** The affected services by the service message. */
    private _services?: string[] | undefined;
    /** The severity property */
    private _severity?: ServiceUpdateSeverity | undefined;
    /** A collection of tags for the service message. Tags are provided by the service team/support team who post the message to tell whether this message contains privacy data, or whether this message is for a service new feature update, and so on. */
    private _tags?: string[] | undefined;
    /** Represents user viewpoints data of the service message. This data includes message status such as whether the user has archived, read, or marked the message as favorite. This property is null when accessed with application permissions. */
    private _viewPoint?: ServiceUpdateMessageViewpoint | undefined;
    /**
     * Gets the actionRequiredByDateTime property value. The expected deadline of the action for the message.
     * @returns a Date
     */
    public get actionRequiredByDateTime() {
        return this._actionRequiredByDateTime;
    };
    /**
     * Sets the actionRequiredByDateTime property value. The expected deadline of the action for the message.
     * @param value Value to set for the actionRequiredByDateTime property.
     */
    public set actionRequiredByDateTime(value: Date | undefined) {
        this._actionRequiredByDateTime = value;
    };
    /**
     * Gets the attachments property value. A collection of serviceAnnouncementAttachments.
     * @returns a serviceAnnouncementAttachment
     */
    public get attachments() {
        return this._attachments;
    };
    /**
     * Sets the attachments property value. A collection of serviceAnnouncementAttachments.
     * @param value Value to set for the attachments property.
     */
    public set attachments(value: ServiceAnnouncementAttachment[] | undefined) {
        this._attachments = value;
    };
    /**
     * Gets the attachmentsArchive property value. The zip file that contains all attachments for a message.
     * @returns a binary
     */
    public get attachmentsArchive() {
        return this._attachmentsArchive;
    };
    /**
     * Sets the attachmentsArchive property value. The zip file that contains all attachments for a message.
     * @param value Value to set for the attachmentsArchive property.
     */
    public set attachmentsArchive(value: string | undefined) {
        this._attachmentsArchive = value;
    };
    /**
     * Gets the body property value. The body property
     * @returns a itemBody
     */
    public get body() {
        return this._body;
    };
    /**
     * Sets the body property value. The body property
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        this._body = value;
    };
    /**
     * Gets the category property value. The category property
     * @returns a serviceUpdateCategory
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. The category property
     * @param value Value to set for the category property.
     */
    public set category(value: ServiceUpdateCategory | undefined) {
        this._category = value;
    };
    /**
     * Instantiates a new ServiceUpdateMessage and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.serviceUpdateMessage";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "actionRequiredByDateTime": n => { this.actionRequiredByDateTime = n.getDateValue(); },
            "attachments": n => { this.attachments = n.getCollectionOfObjectValues<ServiceAnnouncementAttachment>(createServiceAnnouncementAttachmentFromDiscriminatorValue); },
            "attachmentsArchive": n => { this.attachmentsArchive = n.getStringValue(); },
            "body": n => { this.body = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
            "category": n => { this.category = n.getEnumValue<ServiceUpdateCategory>(ServiceUpdateCategory); },
            "hasAttachments": n => { this.hasAttachments = n.getBooleanValue(); },
            "isMajorChange": n => { this.isMajorChange = n.getBooleanValue(); },
            "services": n => { this.services = n.getCollectionOfPrimitiveValues<string>(); },
            "severity": n => { this.severity = n.getEnumValue<ServiceUpdateSeverity>(ServiceUpdateSeverity); },
            "tags": n => { this.tags = n.getCollectionOfPrimitiveValues<string>(); },
            "viewPoint": n => { this.viewPoint = n.getObjectValue<ServiceUpdateMessageViewpoint>(createServiceUpdateMessageViewpointFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the hasAttachments property value. Indicates whether the message has any attachment.
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Sets the hasAttachments property value. Indicates whether the message has any attachment.
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        this._hasAttachments = value;
    };
    /**
     * Gets the isMajorChange property value. Indicates whether the message describes a major update for the service.
     * @returns a boolean
     */
    public get isMajorChange() {
        return this._isMajorChange;
    };
    /**
     * Sets the isMajorChange property value. Indicates whether the message describes a major update for the service.
     * @param value Value to set for the isMajorChange property.
     */
    public set isMajorChange(value: boolean | undefined) {
        this._isMajorChange = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("actionRequiredByDateTime", this.actionRequiredByDateTime);
        writer.writeCollectionOfObjectValues<ServiceAnnouncementAttachment>("attachments", this.attachments);
        writer.writeStringValue("attachmentsArchive", this.attachmentsArchive);
        writer.writeObjectValue<ItemBody>("body", this.body);
        writer.writeEnumValue<ServiceUpdateCategory>("category", this.category);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeBooleanValue("isMajorChange", this.isMajorChange);
        writer.writeCollectionOfPrimitiveValues<string>("services", this.services);
        writer.writeEnumValue<ServiceUpdateSeverity>("severity", this.severity);
        writer.writeCollectionOfPrimitiveValues<string>("tags", this.tags);
        writer.writeObjectValue<ServiceUpdateMessageViewpoint>("viewPoint", this.viewPoint);
    };
    /**
     * Gets the services property value. The affected services by the service message.
     * @returns a string
     */
    public get services() {
        return this._services;
    };
    /**
     * Sets the services property value. The affected services by the service message.
     * @param value Value to set for the services property.
     */
    public set services(value: string[] | undefined) {
        this._services = value;
    };
    /**
     * Gets the severity property value. The severity property
     * @returns a serviceUpdateSeverity
     */
    public get severity() {
        return this._severity;
    };
    /**
     * Sets the severity property value. The severity property
     * @param value Value to set for the severity property.
     */
    public set severity(value: ServiceUpdateSeverity | undefined) {
        this._severity = value;
    };
    /**
     * Gets the tags property value. A collection of tags for the service message. Tags are provided by the service team/support team who post the message to tell whether this message contains privacy data, or whether this message is for a service new feature update, and so on.
     * @returns a string
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Sets the tags property value. A collection of tags for the service message. Tags are provided by the service team/support team who post the message to tell whether this message contains privacy data, or whether this message is for a service new feature update, and so on.
     * @param value Value to set for the tags property.
     */
    public set tags(value: string[] | undefined) {
        this._tags = value;
    };
    /**
     * Gets the viewPoint property value. Represents user viewpoints data of the service message. This data includes message status such as whether the user has archived, read, or marked the message as favorite. This property is null when accessed with application permissions.
     * @returns a serviceUpdateMessageViewpoint
     */
    public get viewPoint() {
        return this._viewPoint;
    };
    /**
     * Sets the viewPoint property value. Represents user viewpoints data of the service message. This data includes message status such as whether the user has archived, read, or marked the message as favorite. This property is null when accessed with application permissions.
     * @param value Value to set for the viewPoint property.
     */
    public set viewPoint(value: ServiceUpdateMessageViewpoint | undefined) {
        this._viewPoint = value;
    };
}
