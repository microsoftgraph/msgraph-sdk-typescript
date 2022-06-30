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
export class MobileAppImpl extends EntityImpl implements MobileApp {
    /** The list of group assignments for this mobile app. */
    private _assignments?: MobileAppAssignment[] | undefined;
    /** The list of categories for this app. */
    private _categories?: MobileAppCategory[] | undefined;
    /** The date and time the app was created. */
    private _createdDateTime?: Date | undefined;
    /** The description of the app. */
    private _description?: string | undefined;
    /** The developer of the app. */
    private _developer?: string | undefined;
    /** The admin provided or imported title of the app. */
    private _displayName?: string | undefined;
    /** The more information Url. */
    private _informationUrl?: string | undefined;
    /** The value indicating whether the app is marked as featured by the admin. */
    private _isFeatured?: boolean | undefined;
    /** The large icon, to be displayed in the app details and used for upload of the icon. */
    private _largeIcon?: MimeContent | undefined;
    /** The date and time the app was last modified. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Notes for the app. */
    private _notes?: string | undefined;
    /** The owner of the app. */
    private _owner?: string | undefined;
    /** The privacy statement Url. */
    private _privacyInformationUrl?: string | undefined;
    /** The publisher of the app. */
    private _publisher?: string | undefined;
    /** The publishing state for the app. The app cannot be assigned unless the app is published. Possible values are: notPublished, processing, published. */
    private _publishingState?: MobileAppPublishingState | undefined;
    /**
     * Gets the assignments property value. The list of group assignments for this mobile app.
     * @returns a MobileAppAssignmentInterface
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. The list of group assignments for this mobile app.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: MobileAppAssignment[] | undefined) {
        if(value) {
            const assignmentsArrValue: MobileAppAssignmentImpl[] = [];
            this.assignments?.forEach(element => {
                assignmentsArrValue.push((element instanceof MobileAppAssignmentImpl? element:new MobileAppAssignmentImpl(element)));
            });
            this._assignments = assignmentsArrValue;
        }
    };
    /**
     * Gets the categories property value. The list of categories for this app.
     * @returns a MobileAppCategoryInterface
     */
    public get categories() {
        return this._categories;
    };
    /**
     * Sets the categories property value. The list of categories for this app.
     * @param value Value to set for the categories property.
     */
    public set categories(value: MobileAppCategory[] | undefined) {
        if(value) {
            const categoriesArrValue: MobileAppCategoryImpl[] = [];
            this.categories?.forEach(element => {
                categoriesArrValue.push((element instanceof MobileAppCategoryImpl? element:new MobileAppCategoryImpl(element)));
            });
            this._categories = categoriesArrValue;
        }
    };
    /**
     * Instantiates a new mobileApp and sets the default values.
     * @param mobileAppParameterValue 
     */
    public constructor(mobileAppParameterValue?: MobileApp | undefined) {
        super(mobileAppParameterValue);
        this._assignments = mobileAppParameterValue?.assignments;
        this._categories = mobileAppParameterValue?.categories;
        this._createdDateTime = mobileAppParameterValue?.createdDateTime;
        this._description = mobileAppParameterValue?.description;
        this._developer = mobileAppParameterValue?.developer;
        this._displayName = mobileAppParameterValue?.displayName;
        this._informationUrl = mobileAppParameterValue?.informationUrl;
        this._isFeatured = mobileAppParameterValue?.isFeatured;
        this._largeIcon = mobileAppParameterValue?.largeIcon;
        this._lastModifiedDateTime = mobileAppParameterValue?.lastModifiedDateTime;
        this._notes = mobileAppParameterValue?.notes;
        this._owner = mobileAppParameterValue?.owner;
        this._privacyInformationUrl = mobileAppParameterValue?.privacyInformationUrl;
        this._publisher = mobileAppParameterValue?.publisher;
        this._publishingState = mobileAppParameterValue?.publishingState;
    };
    /**
     * Gets the createdDateTime property value. The date and time the app was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time the app was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the description property value. The description of the app.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of the app.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the developer property value. The developer of the app.
     * @returns a string
     */
    public get developer() {
        return this._developer;
    };
    /**
     * Sets the developer property value. The developer of the app.
     * @param value Value to set for the developer property.
     */
    public set developer(value: string | undefined) {
        if(value) {
            this._developer = value;
        }
    };
    /**
     * Gets the displayName property value. The admin provided or imported title of the app.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The admin provided or imported title of the app.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the informationUrl property value. The more information Url.
     * @returns a string
     */
    public get informationUrl() {
        return this._informationUrl;
    };
    /**
     * Sets the informationUrl property value. The more information Url.
     * @param value Value to set for the informationUrl property.
     */
    public set informationUrl(value: string | undefined) {
        if(value) {
            this._informationUrl = value;
        }
    };
    /**
     * Gets the isFeatured property value. The value indicating whether the app is marked as featured by the admin.
     * @returns a boolean
     */
    public get isFeatured() {
        return this._isFeatured;
    };
    /**
     * Sets the isFeatured property value. The value indicating whether the app is marked as featured by the admin.
     * @param value Value to set for the isFeatured property.
     */
    public set isFeatured(value: boolean | undefined) {
        if(value) {
            this._isFeatured = value;
        }
    };
    /**
     * Gets the largeIcon property value. The large icon, to be displayed in the app details and used for upload of the icon.
     * @returns a MimeContentInterface
     */
    public get largeIcon() {
        return this._largeIcon;
    };
    /**
     * Sets the largeIcon property value. The large icon, to be displayed in the app details and used for upload of the icon.
     * @param value Value to set for the largeIcon property.
     */
    public set largeIcon(value: MimeContent | undefined) {
        if(value) {
            this._largeIcon = value instanceof MimeContentImpl? value : new MimeContentImpl(value);
        }
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time the app was last modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time the app was last modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the notes property value. Notes for the app.
     * @returns a string
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Sets the notes property value. Notes for the app.
     * @param value Value to set for the notes property.
     */
    public set notes(value: string | undefined) {
        if(value) {
            this._notes = value;
        }
    };
    /**
     * Gets the owner property value. The owner of the app.
     * @returns a string
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Sets the owner property value. The owner of the app.
     * @param value Value to set for the owner property.
     */
    public set owner(value: string | undefined) {
        if(value) {
            this._owner = value;
        }
    };
    /**
     * Gets the privacyInformationUrl property value. The privacy statement Url.
     * @returns a string
     */
    public get privacyInformationUrl() {
        return this._privacyInformationUrl;
    };
    /**
     * Sets the privacyInformationUrl property value. The privacy statement Url.
     * @param value Value to set for the privacyInformationUrl property.
     */
    public set privacyInformationUrl(value: string | undefined) {
        if(value) {
            this._privacyInformationUrl = value;
        }
    };
    /**
     * Gets the publisher property value. The publisher of the app.
     * @returns a string
     */
    public get publisher() {
        return this._publisher;
    };
    /**
     * Sets the publisher property value. The publisher of the app.
     * @param value Value to set for the publisher property.
     */
    public set publisher(value: string | undefined) {
        if(value) {
            this._publisher = value;
        }
    };
    /**
     * Gets the publishingState property value. The publishing state for the app. The app cannot be assigned unless the app is published. Possible values are: notPublished, processing, published.
     * @returns a mobileAppPublishingState
     */
    public get publishingState() {
        return this._publishingState;
    };
    /**
     * Sets the publishingState property value. The publishing state for the app. The app cannot be assigned unless the app is published. Possible values are: notPublished, processing, published.
     * @param value Value to set for the publishingState property.
     */
    public set publishingState(value: MobileAppPublishingState | undefined) {
        if(value) {
            this._publishingState = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: MobileAppAssignmentImpl[] = [];
        this.assignments?.forEach(element => {
            assignmentsArrValue.push((element instanceof MobileAppAssignmentImpl? element:new MobileAppAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MobileAppAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.categories && this.categories.length != 0){        const categoriesArrValue: MobileAppCategoryImpl[] = [];
        this.categories?.forEach(element => {
            categoriesArrValue.push((element instanceof MobileAppCategoryImpl? element:new MobileAppCategoryImpl(element)));
        });
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
            writer.writeObjectValue<MimeContentImpl>("largeIcon", (!this.largeIcon || this.largeIcon instanceof MimeContentImpl? this.largeIcon : new MimeContentImpl(this.largeIcon)));
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
