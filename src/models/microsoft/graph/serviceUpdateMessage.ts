import {ItemBody} from './itemBody';
import {ServiceAnnouncementBase} from './serviceAnnouncementBase';
import {ServiceUpdateCategory} from './serviceUpdateCategory';
import {ServiceUpdateMessageViewpoint} from './serviceUpdateMessageViewpoint';
import {ServiceUpdateSeverity} from './serviceUpdateSeverity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceUpdateMessage extends ServiceAnnouncementBase implements Parsable {
    /** The expected deadline of the action for the message.  */
    private _actionRequiredByDateTime?: Date | undefined;
    private _body?: ItemBody | undefined;
    /** The service message category. Possible values are: preventOrFixIssue, planForChange, stayInformed, unknownFutureValue.  */
    private _category?: ServiceUpdateCategory | undefined;
    /** Indicates whether the message describes a major update for the service.  */
    private _isMajorChange?: boolean | undefined;
    /** The affected services by the service message.  */
    private _services?: string[] | undefined;
    /** The severity of the service message. Possible values are: normal, high, critical, unknownFutureValue.  */
    private _severity?: ServiceUpdateSeverity | undefined;
    /** A collection of tags for the service message.  */
    private _tags?: string[] | undefined;
    /** Represents user view points data of the service message. This data includes message status such as whether the user has archived, read, or marked the message as favorite. This property is null when accessed with application permissions.  */
    private _viewPoint?: ServiceUpdateMessageViewpoint | undefined;
    /**
     * Instantiates a new serviceUpdateMessage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the actionRequiredByDateTime property value. The expected deadline of the action for the message.
     * @returns a Date
     */
    public get actionRequiredByDateTime() {
        return this._actionRequiredByDateTime;
    };
    /**
     * Gets the body property value. 
     * @returns a itemBody
     */
    public get body() {
        return this._body;
    };
    /**
     * Gets the category property value. The service message category. Possible values are: preventOrFixIssue, planForChange, stayInformed, unknownFutureValue.
     * @returns a serviceUpdateCategory
     */
    public get category() {
        return this._category;
    };
    /**
     * Gets the isMajorChange property value. Indicates whether the message describes a major update for the service.
     * @returns a boolean
     */
    public get isMajorChange() {
        return this._isMajorChange;
    };
    /**
     * Gets the services property value. The affected services by the service message.
     * @returns a string
     */
    public get services() {
        return this._services;
    };
    /**
     * Gets the severity property value. The severity of the service message. Possible values are: normal, high, critical, unknownFutureValue.
     * @returns a serviceUpdateSeverity
     */
    public get severity() {
        return this._severity;
    };
    /**
     * Gets the tags property value. A collection of tags for the service message.
     * @returns a string
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Gets the viewPoint property value. Represents user view points data of the service message. This data includes message status such as whether the user has archived, read, or marked the message as favorite. This property is null when accessed with application permissions.
     * @returns a serviceUpdateMessageViewpoint
     */
    public get viewPoint() {
        return this._viewPoint;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["actionRequiredByDateTime", (o, n) => { (o as unknown as ServiceUpdateMessage).actionRequiredByDateTime = n.getDateValue(); }],
            ["body", (o, n) => { (o as unknown as ServiceUpdateMessage).body = n.getObjectValue<ItemBody>(ItemBody); }],
            ["category", (o, n) => { (o as unknown as ServiceUpdateMessage).category = n.getEnumValue<ServiceUpdateCategory>(ServiceUpdateCategory); }],
            ["isMajorChange", (o, n) => { (o as unknown as ServiceUpdateMessage).isMajorChange = n.getBooleanValue(); }],
            ["services", (o, n) => { (o as unknown as ServiceUpdateMessage).services = n.getCollectionOfPrimitiveValues<string>(); }],
            ["severity", (o, n) => { (o as unknown as ServiceUpdateMessage).severity = n.getEnumValue<ServiceUpdateSeverity>(ServiceUpdateSeverity); }],
            ["tags", (o, n) => { (o as unknown as ServiceUpdateMessage).tags = n.getCollectionOfPrimitiveValues<string>(); }],
            ["viewPoint", (o, n) => { (o as unknown as ServiceUpdateMessage).viewPoint = n.getObjectValue<ServiceUpdateMessageViewpoint>(ServiceUpdateMessageViewpoint); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("actionRequiredByDateTime", this.actionRequiredByDateTime);
        writer.writeObjectValue<ItemBody>("body", this.body);
        writer.writeEnumValue<ServiceUpdateCategory>("category", this.category);
        writer.writeBooleanValue("isMajorChange", this.isMajorChange);
        writer.writeCollectionOfPrimitiveValues<string>("services", this.services);
        writer.writeEnumValue<ServiceUpdateSeverity>("severity", this.severity);
        writer.writeCollectionOfPrimitiveValues<string>("tags", this.tags);
        writer.writeObjectValue<ServiceUpdateMessageViewpoint>("viewPoint", this.viewPoint);
    };
    /**
     * Sets the actionRequiredByDateTime property value. The expected deadline of the action for the message.
     * @param value Value to set for the actionRequiredByDateTime property.
     */
    public set actionRequiredByDateTime(value: Date | undefined) {
        this._actionRequiredByDateTime = value;
    };
    /**
     * Sets the body property value. 
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        this._body = value;
    };
    /**
     * Sets the category property value. The service message category. Possible values are: preventOrFixIssue, planForChange, stayInformed, unknownFutureValue.
     * @param value Value to set for the category property.
     */
    public set category(value: ServiceUpdateCategory | undefined) {
        this._category = value;
    };
    /**
     * Sets the isMajorChange property value. Indicates whether the message describes a major update for the service.
     * @param value Value to set for the isMajorChange property.
     */
    public set isMajorChange(value: boolean | undefined) {
        this._isMajorChange = value;
    };
    /**
     * Sets the services property value. The affected services by the service message.
     * @param value Value to set for the services property.
     */
    public set services(value: string[] | undefined) {
        this._services = value;
    };
    /**
     * Sets the severity property value. The severity of the service message. Possible values are: normal, high, critical, unknownFutureValue.
     * @param value Value to set for the severity property.
     */
    public set severity(value: ServiceUpdateSeverity | undefined) {
        this._severity = value;
    };
    /**
     * Sets the tags property value. A collection of tags for the service message.
     * @param value Value to set for the tags property.
     */
    public set tags(value: string[] | undefined) {
        this._tags = value;
    };
    /**
     * Sets the viewPoint property value. Represents user view points data of the service message. This data includes message status such as whether the user has archived, read, or marked the message as favorite. This property is null when accessed with application permissions.
     * @param value Value to set for the viewPoint property.
     */
    public set viewPoint(value: ServiceUpdateMessageViewpoint | undefined) {
        this._viewPoint = value;
    };
}
