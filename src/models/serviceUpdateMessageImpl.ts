import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createServiceAnnouncementAttachmentFromDiscriminatorValue} from './createServiceAnnouncementAttachmentFromDiscriminatorValue';
import {createServiceUpdateMessageViewpointFromDiscriminatorValue} from './createServiceUpdateMessageViewpointFromDiscriminatorValue';
import {ItemBodyImpl, ServiceAnnouncementAttachmentImpl, ServiceAnnouncementBaseImpl, ServiceUpdateMessageViewpointImpl} from './index';
import {ItemBody} from './itemBody';
import {ServiceAnnouncementAttachment} from './serviceAnnouncementAttachment';
import {ServiceUpdateCategory} from './serviceUpdateCategory';
import {ServiceUpdateMessage} from './serviceUpdateMessage';
import {ServiceUpdateMessageViewpoint} from './serviceUpdateMessageViewpoint';
import {ServiceUpdateSeverity} from './serviceUpdateSeverity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class ServiceUpdateMessageImpl extends ServiceAnnouncementBaseImpl implements Parsable, ServiceUpdateMessage {
    /** The expected deadline of the action for the message. */
    public actionRequiredByDateTime?: Date | undefined;
    /** A collection of serviceAnnouncementAttachments. */
    public attachments?: ServiceAnnouncementAttachment[] | undefined;
    /** The zip file of all attachments for a message. */
    public attachmentsArchive?: string | undefined;
    /** The body property */
    public body?: ItemBody | undefined;
    /** The service message category. Possible values are: preventOrFixIssue, planForChange, stayInformed, unknownFutureValue. */
    public category?: ServiceUpdateCategory | undefined;
    /** Indicates whether the message has any attachment. */
    public hasAttachments?: boolean | undefined;
    /** Indicates whether the message describes a major update for the service. */
    public isMajorChange?: boolean | undefined;
    /** The affected services by the service message. */
    public services?: string[] | undefined;
    /** The severity of the service message. Possible values are: normal, high, critical, unknownFutureValue. */
    public severity?: ServiceUpdateSeverity | undefined;
    /** A collection of tags for the service message. Tags are provided by the service team/support team who post the message to tell whether this message contains privacy data, or whether this message is for a service new feature update, and so on. */
    public tags?: string[] | undefined;
    /** Represents user viewpoints data of the service message. This data includes message status such as whether the user has archived, read, or marked the message as favorite. This property is null when accessed with application permissions. */
    public viewPoint?: ServiceUpdateMessageViewpoint | undefined;
    /**
     * Instantiates a new serviceUpdateMessage and sets the default values.
     * @param serviceUpdateMessageParameterValue 
     */
    public constructor(serviceUpdateMessageParameterValue?: ServiceUpdateMessage | undefined) {
        super();
        this.actionRequiredByDateTime = serviceUpdateMessageParameterValue?.actionRequiredByDateTime ;
        this.attachments = serviceUpdateMessageParameterValue?.attachments ;
        this.attachmentsArchive = serviceUpdateMessageParameterValue?.attachmentsArchive ;
        this.body = serviceUpdateMessageParameterValue?.body ;
        this.category = serviceUpdateMessageParameterValue?.category ;
        this.hasAttachments = serviceUpdateMessageParameterValue?.hasAttachments ;
        this.isMajorChange = serviceUpdateMessageParameterValue?.isMajorChange ;
        this.services = serviceUpdateMessageParameterValue?.services ;
        this.severity = serviceUpdateMessageParameterValue?.severity ;
        this.tags = serviceUpdateMessageParameterValue?.tags ;
        this.viewPoint = serviceUpdateMessageParameterValue?.viewPoint ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "actionRequiredByDateTime": n => { this.actionRequiredByDateTime = n.getDateValue(); },
            "attachments": n => { this.attachments = n.getCollectionOfObjectValues<ServiceAnnouncementAttachmentImpl>(createServiceAnnouncementAttachmentFromDiscriminatorValue); },
            "attachmentsArchive": n => { this.attachmentsArchive = n.getStringValue(); },
            "body": n => { this.body = n.getObjectValue<ItemBodyImpl>(createItemBodyFromDiscriminatorValue); },
            "category": n => { this.category = n.getEnumValue<ServiceUpdateCategory>(ServiceUpdateCategory); },
            "hasAttachments": n => { this.hasAttachments = n.getBooleanValue(); },
            "isMajorChange": n => { this.isMajorChange = n.getBooleanValue(); },
            "services": n => { this.services = n.getCollectionOfPrimitiveValues<string>(); },
            "severity": n => { this.severity = n.getEnumValue<ServiceUpdateSeverity>(ServiceUpdateSeverity); },
            "tags": n => { this.tags = n.getCollectionOfPrimitiveValues<string>(); },
            "viewPoint": n => { this.viewPoint = n.getObjectValue<ServiceUpdateMessageViewpointImpl>(createServiceUpdateMessageViewpointFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.actionRequiredByDateTime){
        writer.writeDateValue("actionRequiredByDateTime", this.actionRequiredByDateTime);
        }
        if(this.attachments && this.attachments.length != 0){        const attachmentsArrValue: ServiceAnnouncementAttachmentImpl[] = []; this.attachments?.forEach(element => {attachmentsArrValue.push(new ServiceAnnouncementAttachmentImpl(element));});
        writer.writeCollectionOfObjectValues<ServiceAnnouncementAttachmentImpl>("attachments", attachmentsArrValue);
        }
        if(this.attachmentsArchive){
        writer.writeStringValue("attachmentsArchive", this.attachmentsArchive);
        }
        if(this.body){
        writer.writeObjectValue<ItemBodyImpl>("body", new ItemBodyImpl(this.body));
        }
        if(this.category){
        writer.writeEnumValue<ServiceUpdateCategory>("category", this.category);
        }
        if(this.hasAttachments){
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        }
        if(this.isMajorChange){
        writer.writeBooleanValue("isMajorChange", this.isMajorChange);
        }
        if(this.services){
        writer.writeCollectionOfPrimitiveValues<string>("services", this.services);
        }
        if(this.severity){
        writer.writeEnumValue<ServiceUpdateSeverity>("severity", this.severity);
        }
        if(this.tags){
        writer.writeCollectionOfPrimitiveValues<string>("tags", this.tags);
        }
        if(this.viewPoint){
        writer.writeObjectValue<ServiceUpdateMessageViewpointImpl>("viewPoint", new ServiceUpdateMessageViewpointImpl(this.viewPoint));
        }
    };
}
