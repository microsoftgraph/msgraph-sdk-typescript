import {ChangeType} from './changeType';
import {createChangeNotificationEncryptedContentFromDiscriminatorValue} from './createChangeNotificationEncryptedContentFromDiscriminatorValue';
import {createResourceDataFromDiscriminatorValue} from './createResourceDataFromDiscriminatorValue';
import {ChangeNotificationEncryptedContent, ResourceData} from './index';
import {LifecycleEventType} from './lifecycleEventType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChangeNotification implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _changeType?: ChangeType | undefined;
    /** Value of the clientState property sent in the subscription request (if any). The maximum length is 255 characters. The client can check whether the change notification came from the service by comparing the values of the clientState property. The value of the clientState property sent with the subscription is compared with the value of the clientState property received with each change notification. Optional. */
    private _clientState?: string | undefined;
    /** (Preview) Encrypted content attached with the change notification. Only provided if encryptionCertificate and includeResourceData were defined during the subscription request and if the resource supports it. Optional. */
    private _encryptedContent?: ChangeNotificationEncryptedContent | undefined;
    /** Unique ID for the notification. Optional. */
    private _id?: string | undefined;
    /** The type of lifecycle notification if the current notification is a lifecycle notification. Optional. Supported values are missed, subscriptionRemoved, reauthorizationRequired. Optional. */
    private _lifecycleEvent?: LifecycleEventType | undefined;
    private _odataType?: string | undefined;
    /** The URI of the resource that emitted the change notification relative to https://graph.microsoft.com. Required. */
    private _resource?: string | undefined;
    /** The content of this property depends on the type of resource being subscribed to. Optional. */
    private _resourceData?: ResourceData | undefined;
    /** The expiration time for the subscription. Required. */
    private _subscriptionExpirationDateTime?: Date | undefined;
    /** The unique identifier of the subscription that generated the notification.Required. */
    private _subscriptionId?: string | undefined;
    /** The unique identifier of the tenant from which the change notification originated. Required. */
    private _tenantId?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the changeType property value. 
     * @returns a changeType
     */
    public get changeType() {
        return this._changeType;
    };
    /**
     * Sets the changeType property value. 
     * @param value Value to set for the changeType property.
     */
    public set changeType(value: ChangeType | undefined) {
        this._changeType = value;
    };
    /**
     * Gets the clientState property value. Value of the clientState property sent in the subscription request (if any). The maximum length is 255 characters. The client can check whether the change notification came from the service by comparing the values of the clientState property. The value of the clientState property sent with the subscription is compared with the value of the clientState property received with each change notification. Optional.
     * @returns a string
     */
    public get clientState() {
        return this._clientState;
    };
    /**
     * Sets the clientState property value. Value of the clientState property sent in the subscription request (if any). The maximum length is 255 characters. The client can check whether the change notification came from the service by comparing the values of the clientState property. The value of the clientState property sent with the subscription is compared with the value of the clientState property received with each change notification. Optional.
     * @param value Value to set for the clientState property.
     */
    public set clientState(value: string | undefined) {
        this._clientState = value;
    };
    /**
     * Instantiates a new changeNotification and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the encryptedContent property value. (Preview) Encrypted content attached with the change notification. Only provided if encryptionCertificate and includeResourceData were defined during the subscription request and if the resource supports it. Optional.
     * @returns a changeNotificationEncryptedContent
     */
    public get encryptedContent() {
        return this._encryptedContent;
    };
    /**
     * Sets the encryptedContent property value. (Preview) Encrypted content attached with the change notification. Only provided if encryptionCertificate and includeResourceData were defined during the subscription request and if the resource supports it. Optional.
     * @param value Value to set for the encryptedContent property.
     */
    public set encryptedContent(value: ChangeNotificationEncryptedContent | undefined) {
        this._encryptedContent = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "changeType": n => { this.changeType = n.getEnumValue<ChangeType>(ChangeType); },
            "clientState": n => { this.clientState = n.getStringValue(); },
            "encryptedContent": n => { this.encryptedContent = n.getObjectValue<ChangeNotificationEncryptedContent>(createChangeNotificationEncryptedContentFromDiscriminatorValue); },
            "id": n => { this.id = n.getStringValue(); },
            "lifecycleEvent": n => { this.lifecycleEvent = n.getEnumValue<LifecycleEventType>(LifecycleEventType); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "resource": n => { this.resource = n.getStringValue(); },
            "resourceData": n => { this.resourceData = n.getObjectValue<ResourceData>(createResourceDataFromDiscriminatorValue); },
            "subscriptionExpirationDateTime": n => { this.subscriptionExpirationDateTime = n.getDateValue(); },
            "subscriptionId": n => { this.subscriptionId = n.getStringValue(); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. Unique ID for the notification. Optional.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Unique ID for the notification. Optional.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the lifecycleEvent property value. The type of lifecycle notification if the current notification is a lifecycle notification. Optional. Supported values are missed, subscriptionRemoved, reauthorizationRequired. Optional.
     * @returns a lifecycleEventType
     */
    public get lifecycleEvent() {
        return this._lifecycleEvent;
    };
    /**
     * Sets the lifecycleEvent property value. The type of lifecycle notification if the current notification is a lifecycle notification. Optional. Supported values are missed, subscriptionRemoved, reauthorizationRequired. Optional.
     * @param value Value to set for the lifecycleEvent property.
     */
    public set lifecycleEvent(value: LifecycleEventType | undefined) {
        this._lifecycleEvent = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the resource property value. The URI of the resource that emitted the change notification relative to https://graph.microsoft.com. Required.
     * @returns a string
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. The URI of the resource that emitted the change notification relative to https://graph.microsoft.com. Required.
     * @param value Value to set for the resource property.
     */
    public set resource(value: string | undefined) {
        this._resource = value;
    };
    /**
     * Gets the resourceData property value. The content of this property depends on the type of resource being subscribed to. Optional.
     * @returns a resourceData
     */
    public get resourceData() {
        return this._resourceData;
    };
    /**
     * Sets the resourceData property value. The content of this property depends on the type of resource being subscribed to. Optional.
     * @param value Value to set for the resourceData property.
     */
    public set resourceData(value: ResourceData | undefined) {
        this._resourceData = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ChangeType>("changeType", this.changeType);
        writer.writeStringValue("clientState", this.clientState);
        writer.writeObjectValue<ChangeNotificationEncryptedContent>("encryptedContent", this.encryptedContent);
        writer.writeStringValue("id", this.id);
        writer.writeEnumValue<LifecycleEventType>("lifecycleEvent", this.lifecycleEvent);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("resource", this.resource);
        writer.writeObjectValue<ResourceData>("resourceData", this.resourceData);
        writer.writeDateValue("subscriptionExpirationDateTime", this.subscriptionExpirationDateTime);
        writer.writeStringValue("subscriptionId", this.subscriptionId);
        writer.writeStringValue("tenantId", this.tenantId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subscriptionExpirationDateTime property value. The expiration time for the subscription. Required.
     * @returns a Date
     */
    public get subscriptionExpirationDateTime() {
        return this._subscriptionExpirationDateTime;
    };
    /**
     * Sets the subscriptionExpirationDateTime property value. The expiration time for the subscription. Required.
     * @param value Value to set for the subscriptionExpirationDateTime property.
     */
    public set subscriptionExpirationDateTime(value: Date | undefined) {
        this._subscriptionExpirationDateTime = value;
    };
    /**
     * Gets the subscriptionId property value. The unique identifier of the subscription that generated the notification.Required.
     * @returns a Guid
     */
    public get subscriptionId() {
        return this._subscriptionId;
    };
    /**
     * Sets the subscriptionId property value. The unique identifier of the subscription that generated the notification.Required.
     * @param value Value to set for the subscriptionId property.
     */
    public set subscriptionId(value: string | undefined) {
        this._subscriptionId = value;
    };
    /**
     * Gets the tenantId property value. The unique identifier of the tenant from which the change notification originated. Required.
     * @returns a Guid
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The unique identifier of the tenant from which the change notification originated. Required.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
}
