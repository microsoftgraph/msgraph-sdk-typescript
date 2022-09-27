import {createServiceHealthFromDiscriminatorValue} from './createServiceHealthFromDiscriminatorValue';
import {createServiceHealthIssueFromDiscriminatorValue} from './createServiceHealthIssueFromDiscriminatorValue';
import {createServiceUpdateMessageFromDiscriminatorValue} from './createServiceUpdateMessageFromDiscriminatorValue';
import {Entity, ServiceHealth, ServiceHealthIssue, ServiceUpdateMessage} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceAnnouncement extends Entity implements Parsable {
    /** A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly. */
    private _healthOverviews?: ServiceHealth[] | undefined;
    /** A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly. */
    private _issues?: ServiceHealthIssue[] | undefined;
    /** A collection of service messages for tenant. This property is a contained navigation property, it is nullable and readonly. */
    private _messages?: ServiceUpdateMessage[] | undefined;
    /**
     * Instantiates a new ServiceAnnouncement and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.serviceAnnouncement";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "healthOverviews": n => { this.healthOverviews = n.getCollectionOfObjectValues<ServiceHealth>(createServiceHealthFromDiscriminatorValue); },
            "issues": n => { this.issues = n.getCollectionOfObjectValues<ServiceHealthIssue>(createServiceHealthIssueFromDiscriminatorValue); },
            "messages": n => { this.messages = n.getCollectionOfObjectValues<ServiceUpdateMessage>(createServiceUpdateMessageFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the healthOverviews property value. A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @returns a serviceHealth
     */
    public get healthOverviews() {
        return this._healthOverviews;
    };
    /**
     * Sets the healthOverviews property value. A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @param value Value to set for the healthOverviews property.
     */
    public set healthOverviews(value: ServiceHealth[] | undefined) {
        this._healthOverviews = value;
    };
    /**
     * Gets the issues property value. A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @returns a serviceHealthIssue
     */
    public get issues() {
        return this._issues;
    };
    /**
     * Sets the issues property value. A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @param value Value to set for the issues property.
     */
    public set issues(value: ServiceHealthIssue[] | undefined) {
        this._issues = value;
    };
    /**
     * Gets the messages property value. A collection of service messages for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @returns a serviceUpdateMessage
     */
    public get messages() {
        return this._messages;
    };
    /**
     * Sets the messages property value. A collection of service messages for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @param value Value to set for the messages property.
     */
    public set messages(value: ServiceUpdateMessage[] | undefined) {
        this._messages = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ServiceHealth>("healthOverviews", this.healthOverviews);
        writer.writeCollectionOfObjectValues<ServiceHealthIssue>("issues", this.issues);
        writer.writeCollectionOfObjectValues<ServiceUpdateMessage>("messages", this.messages);
    };
}
