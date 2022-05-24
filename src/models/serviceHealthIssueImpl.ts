import {createServiceHealthIssuePostFromDiscriminatorValue} from './createServiceHealthIssuePostFromDiscriminatorValue';
import {ServiceAnnouncementBaseImpl, ServiceHealthIssuePostImpl} from './index';
import {ServiceHealthClassificationType} from './serviceHealthClassificationType';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceHealthIssuePost} from './serviceHealthIssuePost';
import {ServiceHealthOrigin} from './serviceHealthOrigin';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class ServiceHealthIssueImpl extends ServiceAnnouncementBaseImpl implements Parsable, ServiceHealthIssue {
    /** The type of service health issue. Possible values are: advisory, incident, unknownFutureValue. */
    public classification?: ServiceHealthClassificationType | undefined;
    /** The feature name of the service issue. */
    public feature?: string | undefined;
    /** The feature group name of the service issue. */
    public featureGroup?: string | undefined;
    /** The description of the service issue impact. */
    public impactDescription?: string | undefined;
    /** Indicates whether the issue is resolved. */
    public isResolved?: boolean | undefined;
    /** Indicates the origin of the service issue. Possible values are: microsoft, thirdParty, customer, unknownFutureValue. */
    public origin?: ServiceHealthOrigin | undefined;
    /** Collection of historical posts for the service issue. */
    public posts?: ServiceHealthIssuePost[] | undefined;
    /** Indicates the service affected by the issue. */
    public service?: string | undefined;
    /** The status of the service issue. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values. */
    public status?: ServiceHealthStatus | undefined;
    /**
     * Instantiates a new serviceHealthIssue and sets the default values.
     * @param serviceHealthIssueParameterValue 
     */
    public constructor(serviceHealthIssueParameterValue?: ServiceHealthIssue | undefined) {
        super();
        this.classification = serviceHealthIssueParameterValue?.classification ;
        this.feature = serviceHealthIssueParameterValue?.feature ;
        this.featureGroup = serviceHealthIssueParameterValue?.featureGroup ;
        this.impactDescription = serviceHealthIssueParameterValue?.impactDescription ;
        this.isResolved = serviceHealthIssueParameterValue?.isResolved ;
        this.origin = serviceHealthIssueParameterValue?.origin ;
        this.posts = serviceHealthIssueParameterValue?.posts ;
        this.service = serviceHealthIssueParameterValue?.service ;
        this.status = serviceHealthIssueParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "classification": n => { this.classification = n.getEnumValue<ServiceHealthClassificationType>(ServiceHealthClassificationType); },
            "feature": n => { this.feature = n.getStringValue(); },
            "featureGroup": n => { this.featureGroup = n.getStringValue(); },
            "impactDescription": n => { this.impactDescription = n.getStringValue(); },
            "isResolved": n => { this.isResolved = n.getBooleanValue(); },
            "origin": n => { this.origin = n.getEnumValue<ServiceHealthOrigin>(ServiceHealthOrigin); },
            "posts": n => { this.posts = n.getCollectionOfObjectValues<ServiceHealthIssuePostImpl>(createServiceHealthIssuePostFromDiscriminatorValue); },
            "service": n => { this.service = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<ServiceHealthStatus>(ServiceHealthStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.classification){
        writer.writeEnumValue<ServiceHealthClassificationType>("classification", this.classification);
        }
        if(this.feature){
        writer.writeStringValue("feature", this.feature);
        }
        if(this.featureGroup){
        writer.writeStringValue("featureGroup", this.featureGroup);
        }
        if(this.impactDescription){
        writer.writeStringValue("impactDescription", this.impactDescription);
        }
        if(this.isResolved){
        writer.writeBooleanValue("isResolved", this.isResolved);
        }
        if(this.origin){
        writer.writeEnumValue<ServiceHealthOrigin>("origin", this.origin);
        }
        if(this.posts && this.posts.length != 0){        const postsArrValue: ServiceHealthIssuePostImpl[] = []; this.posts?.forEach(element => {postsArrValue.push(new ServiceHealthIssuePostImpl(element));});
        writer.writeCollectionOfObjectValues<ServiceHealthIssuePostImpl>("posts", postsArrValue);
        }
        if(this.service){
        writer.writeStringValue("service", this.service);
        }
        if(this.status){
        writer.writeEnumValue<ServiceHealthStatus>("status", this.status);
        }
    };
}
