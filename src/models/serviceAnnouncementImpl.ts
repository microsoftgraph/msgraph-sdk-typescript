import {createServiceHealthFromDiscriminatorValue} from './createServiceHealthFromDiscriminatorValue';
import {createServiceHealthIssueFromDiscriminatorValue} from './createServiceHealthIssueFromDiscriminatorValue';
import {createServiceUpdateMessageFromDiscriminatorValue} from './createServiceUpdateMessageFromDiscriminatorValue';
import {EntityImpl, ServiceHealthImpl, ServiceHealthIssueImpl, ServiceUpdateMessageImpl} from './index';
import {ServiceAnnouncement} from './serviceAnnouncement';
import {ServiceHealth} from './serviceHealth';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceUpdateMessage} from './serviceUpdateMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class ServiceAnnouncementImpl extends EntityImpl implements ServiceAnnouncement {
    /** A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly. */
    private _healthOverviews?: ServiceHealth[] | undefined;
    /** A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly. */
    private _issues?: ServiceHealthIssue[] | undefined;
    /** A collection of service messages for tenant. This property is a contained navigation property, it is nullable and readonly. */
    private _messages?: ServiceUpdateMessage[] | undefined;
    /**
     * Instantiates a new serviceAnnouncement and sets the default values.
     * @param serviceAnnouncementParameterValue 
     */
    public constructor(serviceAnnouncementParameterValue?: ServiceAnnouncement | undefined) {
        super(serviceAnnouncementParameterValue);
        this._healthOverviews = serviceAnnouncementParameterValue?.healthOverviews;
        this._issues = serviceAnnouncementParameterValue?.issues;
        this._messages = serviceAnnouncementParameterValue?.messages;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "healthOverviews": n => { this.healthOverviews = n.getCollectionOfObjectValues<ServiceHealthImpl>(createServiceHealthFromDiscriminatorValue); },
            "issues": n => { this.issues = n.getCollectionOfObjectValues<ServiceHealthIssueImpl>(createServiceHealthIssueFromDiscriminatorValue); },
            "messages": n => { this.messages = n.getCollectionOfObjectValues<ServiceUpdateMessageImpl>(createServiceUpdateMessageFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the healthOverviews property value. A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @returns a ServiceHealthInterface
     */
    public get healthOverviews() {
        return this._healthOverviews;
    };
    /**
     * Sets the healthOverviews property value. A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @param value Value to set for the healthOverviews property.
     */
    public set healthOverviews(value: ServiceHealth[] | undefined) {
        if(value) {
            const healthOverviewsArrValue: ServiceHealthImpl[] = [];
            this.healthOverviews?.forEach(element => {
                healthOverviewsArrValue.push((element instanceof ServiceHealthImpl? element as ServiceHealthImpl:new ServiceHealthImpl(element)));
            });
            this._healthOverviews = healthOverviewsArrValue;
        }
    };
    /**
     * Gets the issues property value. A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @returns a ServiceHealthIssueInterface
     */
    public get issues() {
        return this._issues;
    };
    /**
     * Sets the issues property value. A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @param value Value to set for the issues property.
     */
    public set issues(value: ServiceHealthIssue[] | undefined) {
        if(value) {
            const issuesArrValue: ServiceHealthIssueImpl[] = [];
            this.issues?.forEach(element => {
                issuesArrValue.push((element instanceof ServiceHealthIssueImpl? element as ServiceHealthIssueImpl:new ServiceHealthIssueImpl(element)));
            });
            this._issues = issuesArrValue;
        }
    };
    /**
     * Gets the messages property value. A collection of service messages for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @returns a ServiceUpdateMessageInterface
     */
    public get messages() {
        return this._messages;
    };
    /**
     * Sets the messages property value. A collection of service messages for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @param value Value to set for the messages property.
     */
    public set messages(value: ServiceUpdateMessage[] | undefined) {
        if(value) {
            const messagesArrValue: ServiceUpdateMessageImpl[] = [];
            this.messages?.forEach(element => {
                messagesArrValue.push((element instanceof ServiceUpdateMessageImpl? element as ServiceUpdateMessageImpl:new ServiceUpdateMessageImpl(element)));
            });
            this._messages = messagesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.healthOverviews && this.healthOverviews.length != 0){        const healthOverviewsArrValue: ServiceHealthImpl[] = [];
        this.healthOverviews?.forEach(element => {
            healthOverviewsArrValue.push((element instanceof ServiceHealthImpl? element as ServiceHealthImpl:new ServiceHealthImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ServiceHealthImpl>("healthOverviews", healthOverviewsArrValue);
        }
        if(this.issues && this.issues.length != 0){        const issuesArrValue: ServiceHealthIssueImpl[] = [];
        this.issues?.forEach(element => {
            issuesArrValue.push((element instanceof ServiceHealthIssueImpl? element as ServiceHealthIssueImpl:new ServiceHealthIssueImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ServiceHealthIssueImpl>("issues", issuesArrValue);
        }
        if(this.messages && this.messages.length != 0){        const messagesArrValue: ServiceUpdateMessageImpl[] = [];
        this.messages?.forEach(element => {
            messagesArrValue.push((element instanceof ServiceUpdateMessageImpl? element as ServiceUpdateMessageImpl:new ServiceUpdateMessageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ServiceUpdateMessageImpl>("messages", messagesArrValue);
        }
    };
}
