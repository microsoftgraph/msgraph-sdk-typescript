import {createMimeContentFromDiscriminatorValue} from './createMimeContentFromDiscriminatorValue';
import {createMobileAppAssignmentFromDiscriminatorValue} from './createMobileAppAssignmentFromDiscriminatorValue';
import {createMobileAppCategoryFromDiscriminatorValue} from './createMobileAppCategoryFromDiscriminatorValue';
import {EntityImpl, MimeContentImpl, MobileAppAssignmentImpl, MobileAppCategoryImpl} from './index';
import {MimeContent} from './mimeContent';
import {MobileApp} from './mobileApp';
import {MobileAppAssignment} from './mobileAppAssignment';
import {MobileAppCategory} from './mobileAppCategory';
import {MobileAppPublishingState} from './mobileAppPublishingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** An abstract class containing the base properties for Intune mobile apps. */
export class MobileAppImpl extends EntityImpl implements MobileApp, Parsable {
    /** The list of group assignments for this mobile app. */
    public assignments?: MobileAppAssignment[] | undefined;
    /** The list of categories for this app. */
    public categories?: MobileAppCategory[] | undefined;
    /** The date and time the app was created. */
    public createdDateTime?: Date | undefined;
    /** The description of the app. */
    public description?: string | undefined;
    /** The developer of the app. */
    public developer?: string | undefined;
    /** The admin provided or imported title of the app. */
    public displayName?: string | undefined;
    /** The more information Url. */
    public informationUrl?: string | undefined;
    /** The value indicating whether the app is marked as featured by the admin. */
    public isFeatured?: boolean | undefined;
    /** The large icon, to be displayed in the app details and used for upload of the icon. */
    public largeIcon?: MimeContent | undefined;
    /** The date and time the app was last modified. */
    public lastModifiedDateTime?: Date | undefined;
    /** Notes for the app. */
    public notes?: string | undefined;
    /** The owner of the app. */
    public owner?: string | undefined;
    /** The privacy statement Url. */
    public privacyInformationUrl?: string | undefined;
    /** The publisher of the app. */
    public publisher?: string | undefined;
    /** The publishing state for the app. The app cannot be assigned unless the app is published. Possible values are: notPublished, processing, published. */
    public publishingState?: MobileAppPublishingState | undefined;
    /**
     * Instantiates a new mobileApp and sets the default values.
     * @param mobileAppParameterValue 
     */
    public constructor(mobileAppParameterValue?: MobileApp | undefined) {
        super();
        this.assignments = mobileAppParameterValue?.assignments ;
        this.categories = mobileAppParameterValue?.categories ;
        this.createdDateTime = mobileAppParameterValue?.createdDateTime ;
        this.description = mobileAppParameterValue?.description ;
        this.developer = mobileAppParameterValue?.developer ;
        this.displayName = mobileAppParameterValue?.displayName ;
        this.informationUrl = mobileAppParameterValue?.informationUrl ;
        this.isFeatured = mobileAppParameterValue?.isFeatured ;
        this.largeIcon = mobileAppParameterValue?.largeIcon ;
        this.lastModifiedDateTime = mobileAppParameterValue?.lastModifiedDateTime ;
        this.notes = mobileAppParameterValue?.notes ;
        this.owner = mobileAppParameterValue?.owner ;
        this.privacyInformationUrl = mobileAppParameterValue?.privacyInformationUrl ;
        this.publisher = mobileAppParameterValue?.publisher ;
        this.publishingState = mobileAppParameterValue?.publishingState ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<MobileAppAssignmentImpl>(createMobileAppAssignmentFromDiscriminatorValue); },
            "categories": n => { this.categories = n.getCollectionOfObjectValues<MobileAppCategoryImpl>(createMobileAppCategoryFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "developer": n => { this.developer = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "informationUrl": n => { this.informationUrl = n.getStringValue(); },
            "isFeatured": n => { this.isFeatured = n.getBooleanValue(); },
            "largeIcon": n => { this.largeIcon = n.getObjectValue<MimeContentImpl>(createMimeContentFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "notes": n => { this.notes = n.getStringValue(); },
            "owner": n => { this.owner = n.getStringValue(); },
            "privacyInformationUrl": n => { this.privacyInformationUrl = n.getStringValue(); },
            "publisher": n => { this.publisher = n.getStringValue(); },
            "publishingState": n => { this.publishingState = n.getEnumValue<MobileAppPublishingState>(MobileAppPublishingState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: MobileAppAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new MobileAppAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<MobileAppAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.categories && this.categories.length != 0){        const categoriesArrValue: MobileAppCategoryImpl[] = []; this.categories?.forEach(element => {categoriesArrValue.push(new MobileAppCategoryImpl(element));});
        writer.writeCollectionOfObjectValues<MobileAppCategoryImpl>("categories", categoriesArrValue);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.developer){
        writer.writeStringValue("developer", this.developer);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.informationUrl){
        writer.writeStringValue("informationUrl", this.informationUrl);
        }
        if(this.isFeatured){
        writer.writeBooleanValue("isFeatured", this.isFeatured);
        }
        if(this.largeIcon){
        writer.writeObjectValue<MimeContentImpl>("largeIcon", new MimeContentImpl(this.largeIcon));
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.notes){
        writer.writeStringValue("notes", this.notes);
        }
        if(this.owner){
        writer.writeStringValue("owner", this.owner);
        }
        if(this.privacyInformationUrl){
        writer.writeStringValue("privacyInformationUrl", this.privacyInformationUrl);
        }
        if(this.publisher){
        writer.writeStringValue("publisher", this.publisher);
        }
        if(this.publishingState){
        writer.writeEnumValue<MobileAppPublishingState>("publishingState", this.publishingState);
        }
    };
}
