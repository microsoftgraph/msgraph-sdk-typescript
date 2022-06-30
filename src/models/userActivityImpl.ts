import {ActivityHistoryItem} from './activityHistoryItem';
import {createActivityHistoryItemFromDiscriminatorValue} from './createActivityHistoryItemFromDiscriminatorValue';
import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createVisualInfoFromDiscriminatorValue} from './createVisualInfoFromDiscriminatorValue';
import {ActivityHistoryItemImpl, EntityImpl, JsonImpl, VisualInfoImpl} from './index';
import {Json} from './json';
import {Status} from './status';
import {UserActivity} from './userActivity';
import {VisualInfo} from './visualInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class UserActivityImpl extends EntityImpl implements UserActivity {
    /** Required. URL used to launch the activity in the best native experience represented by the appId. Might launch a web-based app if no native app exists. */
    private _activationUrl?: string | undefined;
    /** Required. URL for the domain representing the cross-platform identity mapping for the app. Mapping is stored either as a JSON file hosted on the domain or configurable via Windows Dev Center. The JSON file is named cross-platform-app-identifiers and is hosted at root of your HTTPS domain, either at the top level domain or include a sub domain. For example: https://contoso.com or https://myapp.contoso.com but NOT https://myapp.contoso.com/somepath. You must have a unique file and domain (or sub domain) per cross-platform app identity. For example, a separate file and domain is needed for Word vs. PowerPoint. */
    private _activitySourceHost?: string | undefined;
    /** Required. The unique activity ID in the context of the app - supplied by caller and immutable thereafter. */
    private _appActivityId?: string | undefined;
    /** Optional. Short text description of the app used to generate the activity for use in cases when the app is not installed on the user’s local device. */
    private _appDisplayName?: string | undefined;
    /** Optional. A custom piece of data - JSON-LD extensible description of content according to schema.org syntax. */
    private _contentInfo?: Json | undefined;
    /** Optional. Used in the event the content can be rendered outside of a native or web-based app experience (for example, a pointer to an item in an RSS feed). */
    private _contentUrl?: string | undefined;
    /** Set by the server. DateTime in UTC when the object was created on the server. */
    private _createdDateTime?: Date | undefined;
    /** Set by the server. DateTime in UTC when the object expired on the server. */
    private _expirationDateTime?: Date | undefined;
    /** Optional. URL used to launch the activity in a web-based app, if available. */
    private _fallbackUrl?: string | undefined;
    /** Optional. NavigationProperty/Containment; navigation property to the activity's historyItems. */
    private _historyItems?: ActivityHistoryItem[] | undefined;
    /** Set by the server. DateTime in UTC when the object was modified on the server. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored. */
    private _status?: Status | undefined;
    /** Optional. The timezone in which the user's device used to generate the activity was located at activity creation time; values supplied as Olson IDs in order to support cross-platform representation. */
    private _userTimezone?: string | undefined;
    /** The visualElements property */
    private _visualElements?: VisualInfo | undefined;
    /**
     * Gets the activationUrl property value. Required. URL used to launch the activity in the best native experience represented by the appId. Might launch a web-based app if no native app exists.
     * @returns a string
     */
    public get activationUrl() {
        return this._activationUrl;
    };
    /**
     * Sets the activationUrl property value. Required. URL used to launch the activity in the best native experience represented by the appId. Might launch a web-based app if no native app exists.
     * @param value Value to set for the activationUrl property.
     */
    public set activationUrl(value: string | undefined) {
        if(value) {
            this._activationUrl = value;
        }
    };
    /**
     * Gets the activitySourceHost property value. Required. URL for the domain representing the cross-platform identity mapping for the app. Mapping is stored either as a JSON file hosted on the domain or configurable via Windows Dev Center. The JSON file is named cross-platform-app-identifiers and is hosted at root of your HTTPS domain, either at the top level domain or include a sub domain. For example: https://contoso.com or https://myapp.contoso.com but NOT https://myapp.contoso.com/somepath. You must have a unique file and domain (or sub domain) per cross-platform app identity. For example, a separate file and domain is needed for Word vs. PowerPoint.
     * @returns a string
     */
    public get activitySourceHost() {
        return this._activitySourceHost;
    };
    /**
     * Sets the activitySourceHost property value. Required. URL for the domain representing the cross-platform identity mapping for the app. Mapping is stored either as a JSON file hosted on the domain or configurable via Windows Dev Center. The JSON file is named cross-platform-app-identifiers and is hosted at root of your HTTPS domain, either at the top level domain or include a sub domain. For example: https://contoso.com or https://myapp.contoso.com but NOT https://myapp.contoso.com/somepath. You must have a unique file and domain (or sub domain) per cross-platform app identity. For example, a separate file and domain is needed for Word vs. PowerPoint.
     * @param value Value to set for the activitySourceHost property.
     */
    public set activitySourceHost(value: string | undefined) {
        if(value) {
            this._activitySourceHost = value;
        }
    };
    /**
     * Gets the appActivityId property value. Required. The unique activity ID in the context of the app - supplied by caller and immutable thereafter.
     * @returns a string
     */
    public get appActivityId() {
        return this._appActivityId;
    };
    /**
     * Sets the appActivityId property value. Required. The unique activity ID in the context of the app - supplied by caller and immutable thereafter.
     * @param value Value to set for the appActivityId property.
     */
    public set appActivityId(value: string | undefined) {
        if(value) {
            this._appActivityId = value;
        }
    };
    /**
     * Gets the appDisplayName property value. Optional. Short text description of the app used to generate the activity for use in cases when the app is not installed on the user’s local device.
     * @returns a string
     */
    public get appDisplayName() {
        return this._appDisplayName;
    };
    /**
     * Sets the appDisplayName property value. Optional. Short text description of the app used to generate the activity for use in cases when the app is not installed on the user’s local device.
     * @param value Value to set for the appDisplayName property.
     */
    public set appDisplayName(value: string | undefined) {
        if(value) {
            this._appDisplayName = value;
        }
    };
    /**
     * Instantiates a new userActivity and sets the default values.
     * @param userActivityParameterValue 
     */
    public constructor(userActivityParameterValue?: UserActivity | undefined) {
        super(userActivityParameterValue);
        this._activationUrl = userActivityParameterValue?.activationUrl;
        this._activitySourceHost = userActivityParameterValue?.activitySourceHost;
        this._appActivityId = userActivityParameterValue?.appActivityId;
        this._appDisplayName = userActivityParameterValue?.appDisplayName;
        this._contentInfo = userActivityParameterValue?.contentInfo;
        this._contentUrl = userActivityParameterValue?.contentUrl;
        this._createdDateTime = userActivityParameterValue?.createdDateTime;
        this._expirationDateTime = userActivityParameterValue?.expirationDateTime;
        this._fallbackUrl = userActivityParameterValue?.fallbackUrl;
        this._historyItems = userActivityParameterValue?.historyItems;
        this._lastModifiedDateTime = userActivityParameterValue?.lastModifiedDateTime;
        this._status = userActivityParameterValue?.status;
        this._userTimezone = userActivityParameterValue?.userTimezone;
        this._visualElements = userActivityParameterValue?.visualElements;
    };
    /**
     * Gets the contentInfo property value. Optional. A custom piece of data - JSON-LD extensible description of content according to schema.org syntax.
     * @returns a JsonInterface
     */
    public get contentInfo() {
        return this._contentInfo;
    };
    /**
     * Sets the contentInfo property value. Optional. A custom piece of data - JSON-LD extensible description of content according to schema.org syntax.
     * @param value Value to set for the contentInfo property.
     */
    public set contentInfo(value: Json | undefined) {
        if(value) {
            this._contentInfo = value instanceof JsonImpl? value : new JsonImpl(value);
        }
    };
    /**
     * Gets the contentUrl property value. Optional. Used in the event the content can be rendered outside of a native or web-based app experience (for example, a pointer to an item in an RSS feed).
     * @returns a string
     */
    public get contentUrl() {
        return this._contentUrl;
    };
    /**
     * Sets the contentUrl property value. Optional. Used in the event the content can be rendered outside of a native or web-based app experience (for example, a pointer to an item in an RSS feed).
     * @param value Value to set for the contentUrl property.
     */
    public set contentUrl(value: string | undefined) {
        if(value) {
            this._contentUrl = value;
        }
    };
    /**
     * Gets the createdDateTime property value. Set by the server. DateTime in UTC when the object was created on the server.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Set by the server. DateTime in UTC when the object was created on the server.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the expirationDateTime property value. Set by the server. DateTime in UTC when the object expired on the server.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. Set by the server. DateTime in UTC when the object expired on the server.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        if(value) {
            this._expirationDateTime = value;
        }
    };
    /**
     * Gets the fallbackUrl property value. Optional. URL used to launch the activity in a web-based app, if available.
     * @returns a string
     */
    public get fallbackUrl() {
        return this._fallbackUrl;
    };
    /**
     * Sets the fallbackUrl property value. Optional. URL used to launch the activity in a web-based app, if available.
     * @param value Value to set for the fallbackUrl property.
     */
    public set fallbackUrl(value: string | undefined) {
        if(value) {
            this._fallbackUrl = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activationUrl": n => { this.activationUrl = n.getStringValue(); },
            "activitySourceHost": n => { this.activitySourceHost = n.getStringValue(); },
            "appActivityId": n => { this.appActivityId = n.getStringValue(); },
            "appDisplayName": n => { this.appDisplayName = n.getStringValue(); },
            "contentInfo": n => { this.contentInfo = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "contentUrl": n => { this.contentUrl = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "fallbackUrl": n => { this.fallbackUrl = n.getStringValue(); },
            "historyItems": n => { this.historyItems = n.getCollectionOfObjectValues<ActivityHistoryItemImpl>(createActivityHistoryItemFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<Status>(Status); },
            "userTimezone": n => { this.userTimezone = n.getStringValue(); },
            "visualElements": n => { this.visualElements = n.getObjectValue<VisualInfoImpl>(createVisualInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the historyItems property value. Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
     * @returns a ActivityHistoryItemInterface
     */
    public get historyItems() {
        return this._historyItems;
    };
    /**
     * Sets the historyItems property value. Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
     * @param value Value to set for the historyItems property.
     */
    public set historyItems(value: ActivityHistoryItem[] | undefined) {
        if(value) {
            const historyItemsArrValue: ActivityHistoryItemImpl[] = [];
            this.historyItems?.forEach(element => {
                historyItemsArrValue.push((element instanceof ActivityHistoryItemImpl? element:new ActivityHistoryItemImpl(element)));
            });
            this._historyItems = historyItemsArrValue;
        }
    };
    /**
     * Gets the lastModifiedDateTime property value. Set by the server. DateTime in UTC when the object was modified on the server.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Set by the server. DateTime in UTC when the object was modified on the server.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activationUrl){
            writer.writeStringValue("activationUrl", this.activationUrl);
        }
        if(this.activitySourceHost){
            writer.writeStringValue("activitySourceHost", this.activitySourceHost);
        }
        if(this.appActivityId){
            writer.writeStringValue("appActivityId", this.appActivityId);
        }
        if(this.appDisplayName){
            writer.writeStringValue("appDisplayName", this.appDisplayName);
        }
        if(this.contentInfo){
            writer.writeObjectValue<JsonImpl>("contentInfo", (!this.contentInfo || this.contentInfo instanceof JsonImpl? this.contentInfo : new JsonImpl(this.contentInfo)));
        }
        if(this.contentUrl){
            writer.writeStringValue("contentUrl", this.contentUrl);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.expirationDateTime){
            writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.fallbackUrl){
            writer.writeStringValue("fallbackUrl", this.fallbackUrl);
        }
        if(this.historyItems && this.historyItems.length != 0){        const historyItemsArrValue: ActivityHistoryItemImpl[] = [];
        this.historyItems?.forEach(element => {
            historyItemsArrValue.push((element instanceof ActivityHistoryItemImpl? element:new ActivityHistoryItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ActivityHistoryItemImpl>("historyItems", historyItemsArrValue);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.status){
            writer.writeEnumValue<Status>("status", this.status);
        }
        if(this.userTimezone){
            writer.writeStringValue("userTimezone", this.userTimezone);
        }
        if(this.visualElements){
            writer.writeObjectValue<VisualInfoImpl>("visualElements", (!this.visualElements || this.visualElements instanceof VisualInfoImpl? this.visualElements : new VisualInfoImpl(this.visualElements)));
        }
    };
    /**
     * Gets the status property value. Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
     * @returns a status
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
     * @param value Value to set for the status property.
     */
    public set status(value: Status | undefined) {
        if(value) {
            this._status = value;
        }
    };
    /**
     * Gets the userTimezone property value. Optional. The timezone in which the user's device used to generate the activity was located at activity creation time; values supplied as Olson IDs in order to support cross-platform representation.
     * @returns a string
     */
    public get userTimezone() {
        return this._userTimezone;
    };
    /**
     * Sets the userTimezone property value. Optional. The timezone in which the user's device used to generate the activity was located at activity creation time; values supplied as Olson IDs in order to support cross-platform representation.
     * @param value Value to set for the userTimezone property.
     */
    public set userTimezone(value: string | undefined) {
        if(value) {
            this._userTimezone = value;
        }
    };
    /**
     * Gets the visualElements property value. The visualElements property
     * @returns a VisualInfoInterface
     */
    public get visualElements() {
        return this._visualElements;
    };
    /**
     * Sets the visualElements property value. The visualElements property
     * @param value Value to set for the visualElements property.
     */
    public set visualElements(value: VisualInfo | undefined) {
        if(value) {
            this._visualElements = value instanceof VisualInfoImpl? value : new VisualInfoImpl(value);
        }
    };
}
