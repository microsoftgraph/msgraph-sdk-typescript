import {ServiceAnnouncementBase} from './serviceAnnouncementBase';
import {ServiceHealthClassificationType} from './serviceHealthClassificationType';
import {ServiceHealthIssuePost} from './serviceHealthIssuePost';
import {ServiceHealthOrigin} from './serviceHealthOrigin';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceHealthIssue extends ServiceAnnouncementBase implements Parsable {
    /** The type of service health issue. Possible values are: advisory, incident, unknownFutureValue.  */
    private _classification?: ServiceHealthClassificationType | undefined;
    /** The feature name of the service issue.  */
    private _feature?: string | undefined;
    /** The feature group name of the service issue.  */
    private _featureGroup?: string | undefined;
    /** The description of the service issue impact.  */
    private _impactDescription?: string | undefined;
    /** Indicates whether the issue is resolved.  */
    private _isResolved?: boolean | undefined;
    /** Indicates the origin of the service issue. Possible values are: microsoft, thirdParty, customer, unknownFutureValue.  */
    private _origin?: ServiceHealthOrigin | undefined;
    /** Collection of historical posts for the service issue.  */
    private _posts?: ServiceHealthIssuePost[] | undefined;
    /** Indicates the service affected by the issue.  */
    private _service?: string | undefined;
    /** The status of the service issue. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values.  */
    private _status?: ServiceHealthStatus | undefined;
    /**
     * Instantiates a new serviceHealthIssue and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the classification property value. The type of service health issue. Possible values are: advisory, incident, unknownFutureValue.
     * @returns a serviceHealthClassificationType
     */
    public get classification() {
        return this._classification;
    };
    /**
     * Gets the feature property value. The feature name of the service issue.
     * @returns a string
     */
    public get feature() {
        return this._feature;
    };
    /**
     * Gets the featureGroup property value. The feature group name of the service issue.
     * @returns a string
     */
    public get featureGroup() {
        return this._featureGroup;
    };
    /**
     * Gets the impactDescription property value. The description of the service issue impact.
     * @returns a string
     */
    public get impactDescription() {
        return this._impactDescription;
    };
    /**
     * Gets the isResolved property value. Indicates whether the issue is resolved.
     * @returns a boolean
     */
    public get isResolved() {
        return this._isResolved;
    };
    /**
     * Gets the origin property value. Indicates the origin of the service issue. Possible values are: microsoft, thirdParty, customer, unknownFutureValue.
     * @returns a serviceHealthOrigin
     */
    public get origin() {
        return this._origin;
    };
    /**
     * Gets the posts property value. Collection of historical posts for the service issue.
     * @returns a serviceHealthIssuePost
     */
    public get posts() {
        return this._posts;
    };
    /**
     * Gets the service property value. Indicates the service affected by the issue.
     * @returns a string
     */
    public get service() {
        return this._service;
    };
    /**
     * Gets the status property value. The status of the service issue. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values.
     * @returns a serviceHealthStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["classification", (o, n) => { (o as unknown as ServiceHealthIssue).classification = n.getEnumValue<ServiceHealthClassificationType>(ServiceHealthClassificationType); }],
            ["feature", (o, n) => { (o as unknown as ServiceHealthIssue).feature = n.getStringValue(); }],
            ["featureGroup", (o, n) => { (o as unknown as ServiceHealthIssue).featureGroup = n.getStringValue(); }],
            ["impactDescription", (o, n) => { (o as unknown as ServiceHealthIssue).impactDescription = n.getStringValue(); }],
            ["isResolved", (o, n) => { (o as unknown as ServiceHealthIssue).isResolved = n.getBooleanValue(); }],
            ["origin", (o, n) => { (o as unknown as ServiceHealthIssue).origin = n.getEnumValue<ServiceHealthOrigin>(ServiceHealthOrigin); }],
            ["posts", (o, n) => { (o as unknown as ServiceHealthIssue).posts = n.getCollectionOfObjectValues<ServiceHealthIssuePost>(ServiceHealthIssuePost); }],
            ["service", (o, n) => { (o as unknown as ServiceHealthIssue).service = n.getStringValue(); }],
            ["status", (o, n) => { (o as unknown as ServiceHealthIssue).status = n.getEnumValue<ServiceHealthStatus>(ServiceHealthStatus); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<ServiceHealthClassificationType>("classification", this.classification);
        writer.writeStringValue("feature", this.feature);
        writer.writeStringValue("featureGroup", this.featureGroup);
        writer.writeStringValue("impactDescription", this.impactDescription);
        writer.writeBooleanValue("isResolved", this.isResolved);
        writer.writeEnumValue<ServiceHealthOrigin>("origin", this.origin);
        writer.writeCollectionOfObjectValues<ServiceHealthIssuePost>("posts", this.posts);
        writer.writeStringValue("service", this.service);
        writer.writeEnumValue<ServiceHealthStatus>("status", this.status);
    };
    /**
     * Sets the classification property value. The type of service health issue. Possible values are: advisory, incident, unknownFutureValue.
     * @param value Value to set for the classification property.
     */
    public set classification(value: ServiceHealthClassificationType | undefined) {
        this._classification = value;
    };
    /**
     * Sets the feature property value. The feature name of the service issue.
     * @param value Value to set for the feature property.
     */
    public set feature(value: string | undefined) {
        this._feature = value;
    };
    /**
     * Sets the featureGroup property value. The feature group name of the service issue.
     * @param value Value to set for the featureGroup property.
     */
    public set featureGroup(value: string | undefined) {
        this._featureGroup = value;
    };
    /**
     * Sets the impactDescription property value. The description of the service issue impact.
     * @param value Value to set for the impactDescription property.
     */
    public set impactDescription(value: string | undefined) {
        this._impactDescription = value;
    };
    /**
     * Sets the isResolved property value. Indicates whether the issue is resolved.
     * @param value Value to set for the isResolved property.
     */
    public set isResolved(value: boolean | undefined) {
        this._isResolved = value;
    };
    /**
     * Sets the origin property value. Indicates the origin of the service issue. Possible values are: microsoft, thirdParty, customer, unknownFutureValue.
     * @param value Value to set for the origin property.
     */
    public set origin(value: ServiceHealthOrigin | undefined) {
        this._origin = value;
    };
    /**
     * Sets the posts property value. Collection of historical posts for the service issue.
     * @param value Value to set for the posts property.
     */
    public set posts(value: ServiceHealthIssuePost[] | undefined) {
        this._posts = value;
    };
    /**
     * Sets the service property value. Indicates the service affected by the issue.
     * @param value Value to set for the service property.
     */
    public set service(value: string | undefined) {
        this._service = value;
    };
    /**
     * Sets the status property value. The status of the service issue. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values.
     * @param value Value to set for the status property.
     */
    public set status(value: ServiceHealthStatus | undefined) {
        this._status = value;
    };
}
