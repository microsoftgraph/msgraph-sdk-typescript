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

/** Casts the previous resource to user. */
export class UserActivityImpl extends EntityImpl implements Parsable, UserActivity {
    /** Required. URL used to launch the activity in the best native experience represented by the appId. Might launch a web-based app if no native app exists. */
    public activationUrl?: string | undefined;
    /** Required. URL for the domain representing the cross-platform identity mapping for the app. Mapping is stored either as a JSON file hosted on the domain or configurable via Windows Dev Center. The JSON file is named cross-platform-app-identifiers and is hosted at root of your HTTPS domain, either at the top level domain or include a sub domain. For example: https://contoso.com or https://myapp.contoso.com but NOT https://myapp.contoso.com/somepath. You must have a unique file and domain (or sub domain) per cross-platform app identity. For example, a separate file and domain is needed for Word vs. PowerPoint. */
    public activitySourceHost?: string | undefined;
    /** Required. The unique activity ID in the context of the app - supplied by caller and immutable thereafter. */
    public appActivityId?: string | undefined;
    /** Optional. Short text description of the app used to generate the activity for use in cases when the app is not installed on the user’s local device. */
    public appDisplayName?: string | undefined;
    /** Optional. A custom piece of data - JSON-LD extensible description of content according to schema.org syntax. */
    public contentInfo?: Json | undefined;
    /** Optional. Used in the event the content can be rendered outside of a native or web-based app experience (for example, a pointer to an item in an RSS feed). */
    public contentUrl?: string | undefined;
    /** Set by the server. DateTime in UTC when the object was created on the server. */
    public createdDateTime?: Date | undefined;
    /** Set by the server. DateTime in UTC when the object expired on the server. */
    public expirationDateTime?: Date | undefined;
    /** Optional. URL used to launch the activity in a web-based app, if available. */
    public fallbackUrl?: string | undefined;
    /** Optional. NavigationProperty/Containment; navigation property to the activity's historyItems. */
    public historyItems?: ActivityHistoryItem[] | undefined;
    /** Set by the server. DateTime in UTC when the object was modified on the server. */
    public lastModifiedDateTime?: Date | undefined;
    /** Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored. */
    public status?: Status | undefined;
    /** Optional. The timezone in which the user's device used to generate the activity was located at activity creation time; values supplied as Olson IDs in order to support cross-platform representation. */
    public userTimezone?: string | undefined;
    /** The visualElements property */
    public visualElements?: VisualInfo | undefined;
    /**
     * Instantiates a new userActivity and sets the default values.
     * @param userActivityParameterValue 
     */
    public constructor(userActivityParameterValue?: UserActivity | undefined) {
        super();
        this.activationUrl = userActivityParameterValue?.activationUrl ;
        this.activitySourceHost = userActivityParameterValue?.activitySourceHost ;
        this.appActivityId = userActivityParameterValue?.appActivityId ;
        this.appDisplayName = userActivityParameterValue?.appDisplayName ;
        this.contentInfo = userActivityParameterValue?.contentInfo ;
        this.contentUrl = userActivityParameterValue?.contentUrl ;
        this.createdDateTime = userActivityParameterValue?.createdDateTime ;
        this.expirationDateTime = userActivityParameterValue?.expirationDateTime ;
        this.fallbackUrl = userActivityParameterValue?.fallbackUrl ;
        this.historyItems = userActivityParameterValue?.historyItems ;
        this.lastModifiedDateTime = userActivityParameterValue?.lastModifiedDateTime ;
        this.status = userActivityParameterValue?.status ;
        this.userTimezone = userActivityParameterValue?.userTimezone ;
        this.visualElements = userActivityParameterValue?.visualElements ;
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
        writer.writeObjectValue<JsonImpl>("contentInfo", new JsonImpl(this.contentInfo));
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
        if(this.historyItems && this.historyItems.length != 0){        const historyItemsArrValue: ActivityHistoryItemImpl[] = []; this.historyItems?.forEach(element => {historyItemsArrValue.push(new ActivityHistoryItemImpl(element));});
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
        writer.writeObjectValue<VisualInfoImpl>("visualElements", new VisualInfoImpl(this.visualElements));
        }
    };
}
