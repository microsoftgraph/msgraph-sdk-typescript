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
export class ServiceAnnouncementImpl extends EntityImpl implements Parsable, ServiceAnnouncement {
    /** A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly. */
    public healthOverviews?: ServiceHealth[] | undefined;
    /** A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly. */
    public issues?: ServiceHealthIssue[] | undefined;
    /** A collection of service messages for tenant. This property is a contained navigation property, it is nullable and readonly. */
    public messages?: ServiceUpdateMessage[] | undefined;
    /**
     * Instantiates a new serviceAnnouncement and sets the default values.
     * @param serviceAnnouncementParameterValue 
     */
    public constructor(serviceAnnouncementParameterValue?: ServiceAnnouncement | undefined) {
        super();
        this.healthOverviews = serviceAnnouncementParameterValue?.healthOverviews ;
        this.issues = serviceAnnouncementParameterValue?.issues ;
        this.messages = serviceAnnouncementParameterValue?.messages ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.healthOverviews && this.healthOverviews.length != 0){        const healthOverviewsArrValue: ServiceHealthImpl[] = []; this.healthOverviews?.forEach(element => {healthOverviewsArrValue.push(new ServiceHealthImpl(element));});
        writer.writeCollectionOfObjectValues<ServiceHealthImpl>("healthOverviews", healthOverviewsArrValue);
        }
        if(this.issues && this.issues.length != 0){        const issuesArrValue: ServiceHealthIssueImpl[] = []; this.issues?.forEach(element => {issuesArrValue.push(new ServiceHealthIssueImpl(element));});
        writer.writeCollectionOfObjectValues<ServiceHealthIssueImpl>("issues", issuesArrValue);
        }
        if(this.messages && this.messages.length != 0){        const messagesArrValue: ServiceUpdateMessageImpl[] = []; this.messages?.forEach(element => {messagesArrValue.push(new ServiceUpdateMessageImpl(element));});
        writer.writeCollectionOfObjectValues<ServiceUpdateMessageImpl>("messages", messagesArrValue);
        }
    };
}
