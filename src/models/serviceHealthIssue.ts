import {createServiceHealthIssuePostFromDiscriminatorValue} from './createServiceHealthIssuePostFromDiscriminatorValue';
import {ServiceAnnouncementBase, ServiceHealthIssuePost} from './index';
import {ServiceHealthClassificationType} from './serviceHealthClassificationType';
import {ServiceHealthOrigin} from './serviceHealthOrigin';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceHealthIssue extends ServiceAnnouncementBase implements Parsable {
    /** The classification property */
    private _classification?: ServiceHealthClassificationType | undefined;
    /** The feature name of the service issue. */
    private _feature?: string | undefined;
    /** The feature group name of the service issue. */
    private _featureGroup?: string | undefined;
    /** The description of the service issue impact. */
    private _impactDescription?: string | undefined;
    /** Indicates whether the issue is resolved. */
    private _isResolved?: boolean | undefined;
    /** The origin property */
    private _origin?: ServiceHealthOrigin | undefined;
    /** Collection of historical posts for the service issue. */
    private _posts?: ServiceHealthIssuePost[] | undefined;
    /** Indicates the service affected by the issue. */
    private _service?: string | undefined;
    /** The status property */
    private _status?: ServiceHealthStatus | undefined;
    /**
     * Gets the classification property value. The classification property
     * @returns a serviceHealthClassificationType
     */
    public get classification() {
        return this._classification;
    };
    /**
     * Sets the classification property value. The classification property
     * @param value Value to set for the classification property.
     */
    public set classification(value: ServiceHealthClassificationType | undefined) {
        this._classification = value;
    };
    /**
     * Instantiates a new ServiceHealthIssue and sets the default values.
     */
    public constructor() {
        super();
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
        this._feature = value;
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
        this._featureGroup = value;
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
            "posts": n => { this.posts = n.getCollectionOfObjectValues<ServiceHealthIssuePost>(createServiceHealthIssuePostFromDiscriminatorValue); },
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
        this._impactDescription = value;
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
        this._isResolved = value;
    };
    /**
     * Gets the origin property value. The origin property
     * @returns a serviceHealthOrigin
     */
    public get origin() {
        return this._origin;
    };
    /**
     * Sets the origin property value. The origin property
     * @param value Value to set for the origin property.
     */
    public set origin(value: ServiceHealthOrigin | undefined) {
        this._origin = value;
    };
    /**
     * Gets the posts property value. Collection of historical posts for the service issue.
     * @returns a serviceHealthIssuePost
     */
    public get posts() {
        return this._posts;
    };
    /**
     * Sets the posts property value. Collection of historical posts for the service issue.
     * @param value Value to set for the posts property.
     */
    public set posts(value: ServiceHealthIssuePost[] | undefined) {
        this._posts = value;
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
        this._service = value;
    };
    /**
     * Gets the status property value. The status property
     * @returns a serviceHealthStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: ServiceHealthStatus | undefined) {
        this._status = value;
    };
}
