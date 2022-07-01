import {createServiceHealthIssuePostFromDiscriminatorValue} from './createServiceHealthIssuePostFromDiscriminatorValue';
import {ServiceAnnouncementBaseImpl, ServiceHealthIssuePostImpl} from './index';
import {ServiceHealthClassificationType} from './serviceHealthClassificationType';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceHealthIssuePost} from './serviceHealthIssuePost';
import {ServiceHealthOrigin} from './serviceHealthOrigin';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceHealthIssueImpl extends ServiceAnnouncementBaseImpl implements ServiceHealthIssue {
    /** The type of service health issue. Possible values are: advisory, incident, unknownFutureValue. */
    private _classification?: ServiceHealthClassificationType | undefined;
    /** The feature name of the service issue. */
    private _feature?: string | undefined;
    /** The feature group name of the service issue. */
    private _featureGroup?: string | undefined;
    /** The description of the service issue impact. */
    private _impactDescription?: string | undefined;
    /** Indicates whether the issue is resolved. */
    private _isResolved?: boolean | undefined;
    /** Indicates the origin of the service issue. Possible values are: microsoft, thirdParty, customer, unknownFutureValue. */
    private _origin?: ServiceHealthOrigin | undefined;
    /** Collection of historical posts for the service issue. */
    private _posts?: ServiceHealthIssuePost[] | undefined;
    /** Indicates the service affected by the issue. */
    private _service?: string | undefined;
    /** The status of the service issue. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values. */
    private _status?: ServiceHealthStatus | undefined;
    /**
     * Gets the classification property value. The type of service health issue. Possible values are: advisory, incident, unknownFutureValue.
     * @returns a serviceHealthClassificationType
     */
    public get classification() {
        return this._classification;
    };
    /**
     * Sets the classification property value. The type of service health issue. Possible values are: advisory, incident, unknownFutureValue.
     * @param value Value to set for the classification property.
     */
    public set classification(value: ServiceHealthClassificationType | undefined) {
        if(value) {
            this._classification = value;
        }
    };
    /**
     * Instantiates a new ServiceHealthIssue and sets the default values.
     * @param serviceHealthIssueParameterValue 
     */
    public constructor(serviceHealthIssueParameterValue?: ServiceHealthIssue | undefined) {
        super(serviceHealthIssueParameterValue);
        this._classification = serviceHealthIssueParameterValue?.classification;
        this._feature = serviceHealthIssueParameterValue?.feature;
        this._featureGroup = serviceHealthIssueParameterValue?.featureGroup;
        this._impactDescription = serviceHealthIssueParameterValue?.impactDescription;
        this._isResolved = serviceHealthIssueParameterValue?.isResolved;
        this._origin = serviceHealthIssueParameterValue?.origin;
        this._posts = serviceHealthIssueParameterValue?.posts;
        this._service = serviceHealthIssueParameterValue?.service;
        this._status = serviceHealthIssueParameterValue?.status;
    };
    /**
     * Gets the feature property value. The feature name of the service issue.
     * @returns a string
     */
    public get feature() {
        return this._feature;
    };
    /**
     * Sets the feature property value. The feature name of the service issue.
     * @param value Value to set for the feature property.
     */
    public set feature(value: string | undefined) {
        if(value) {
            this._feature = value;
        }
    };
    /**
     * Gets the featureGroup property value. The feature group name of the service issue.
     * @returns a string
     */
    public get featureGroup() {
        return this._featureGroup;
    };
    /**
     * Sets the featureGroup property value. The feature group name of the service issue.
     * @param value Value to set for the featureGroup property.
     */
    public set featureGroup(value: string | undefined) {
        if(value) {
            this._featureGroup = value;
        }
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
     * Gets the impactDescription property value. The description of the service issue impact.
     * @returns a string
     */
    public get impactDescription() {
        return this._impactDescription;
    };
    /**
     * Sets the impactDescription property value. The description of the service issue impact.
     * @param value Value to set for the impactDescription property.
     */
    public set impactDescription(value: string | undefined) {
        if(value) {
            this._impactDescription = value;
        }
    };
    /**
     * Gets the isResolved property value. Indicates whether the issue is resolved.
     * @returns a boolean
     */
    public get isResolved() {
        return this._isResolved;
    };
    /**
     * Sets the isResolved property value. Indicates whether the issue is resolved.
     * @param value Value to set for the isResolved property.
     */
    public set isResolved(value: boolean | undefined) {
        if(value) {
            this._isResolved = value;
        }
    };
    /**
     * Gets the origin property value. Indicates the origin of the service issue. Possible values are: microsoft, thirdParty, customer, unknownFutureValue.
     * @returns a serviceHealthOrigin
     */
    public get origin() {
        return this._origin;
    };
    /**
     * Sets the origin property value. Indicates the origin of the service issue. Possible values are: microsoft, thirdParty, customer, unknownFutureValue.
     * @param value Value to set for the origin property.
     */
    public set origin(value: ServiceHealthOrigin | undefined) {
        if(value) {
            this._origin = value;
        }
    };
    /**
     * Gets the posts property value. Collection of historical posts for the service issue.
     * @returns a ServiceHealthIssuePostInterface
     */
    public get posts() {
        return this._posts;
    };
    /**
     * Sets the posts property value. Collection of historical posts for the service issue.
     * @param value Value to set for the posts property.
     */
    public set posts(value: ServiceHealthIssuePost[] | undefined) {
        if(value) {
            const postsArrValue: ServiceHealthIssuePostImpl[] = [];
            this.posts?.forEach(element => {
                postsArrValue.push((element instanceof ServiceHealthIssuePostImpl? element as ServiceHealthIssuePostImpl:new ServiceHealthIssuePostImpl(element)));
            });
            this._posts = postsArrValue;
        }
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
        if(this.posts && this.posts.length != 0){        const postsArrValue: ServiceHealthIssuePostImpl[] = [];
        this.posts?.forEach(element => {
            postsArrValue.push((element instanceof ServiceHealthIssuePostImpl? element as ServiceHealthIssuePostImpl:new ServiceHealthIssuePostImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ServiceHealthIssuePostImpl>("posts", postsArrValue);
        }
        if(this.service){
            writer.writeStringValue("service", this.service);
        }
        if(this.status){
            writer.writeEnumValue<ServiceHealthStatus>("status", this.status);
        }
    };
    /**
     * Gets the service property value. Indicates the service affected by the issue.
     * @returns a string
     */
    public get service() {
        return this._service;
    };
    /**
     * Sets the service property value. Indicates the service affected by the issue.
     * @param value Value to set for the service property.
     */
    public set service(value: string | undefined) {
        if(value) {
            this._service = value;
        }
    };
    /**
     * Gets the status property value. The status of the service issue. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values.
     * @returns a serviceHealthStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status of the service issue. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values.
     * @param value Value to set for the status property.
     */
    public set status(value: ServiceHealthStatus | undefined) {
        if(value) {
            this._status = value;
        }
    };
}
