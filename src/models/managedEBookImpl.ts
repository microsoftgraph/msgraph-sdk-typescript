import {createDeviceInstallStateFromDiscriminatorValue} from './createDeviceInstallStateFromDiscriminatorValue';
import {createEBookInstallSummaryFromDiscriminatorValue} from './createEBookInstallSummaryFromDiscriminatorValue';
import {createManagedEBookAssignmentFromDiscriminatorValue} from './createManagedEBookAssignmentFromDiscriminatorValue';
import {createMimeContentFromDiscriminatorValue} from './createMimeContentFromDiscriminatorValue';
import {createUserInstallStateSummaryFromDiscriminatorValue} from './createUserInstallStateSummaryFromDiscriminatorValue';
import {DeviceInstallState} from './deviceInstallState';
import {EBookInstallSummary} from './eBookInstallSummary';
import {DeviceInstallStateImpl, EBookInstallSummaryImpl, EntityImpl, ManagedEBookAssignmentImpl, MimeContentImpl, UserInstallStateSummaryImpl} from './index';
import {ManagedEBook} from './managedEBook';
import {ManagedEBookAssignment} from './managedEBookAssignment';
import {MimeContent} from './mimeContent';
import {UserInstallStateSummary} from './userInstallStateSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** An abstract class containing the base properties for Managed eBook. */
export class ManagedEBookImpl extends EntityImpl implements ManagedEBook {
    /** The list of assignments for this eBook. */
    private _assignments?: ManagedEBookAssignment[] | undefined;
    /** The date and time when the eBook file was created. */
    private _createdDateTime?: Date | undefined;
    /** Description. */
    private _description?: string | undefined;
    /** The list of installation states for this eBook. */
    private _deviceStates?: DeviceInstallState[] | undefined;
    /** Name of the eBook. */
    private _displayName?: string | undefined;
    /** The more information Url. */
    private _informationUrl?: string | undefined;
    /** Mobile App Install Summary. */
    private _installSummary?: EBookInstallSummary | undefined;
    /** Book cover. */
    private _largeCover?: MimeContent | undefined;
    /** The date and time when the eBook was last modified. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The privacy statement Url. */
    private _privacyInformationUrl?: string | undefined;
    /** The date and time when the eBook was published. */
    private _publishedDateTime?: Date | undefined;
    /** Publisher. */
    private _publisher?: string | undefined;
    /** The list of installation states for this eBook. */
    private _userStateSummary?: UserInstallStateSummary[] | undefined;
    /**
     * Gets the assignments property value. The list of assignments for this eBook.
     * @returns a ManagedEBookAssignmentInterface
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. The list of assignments for this eBook.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: ManagedEBookAssignment[] | undefined) {
        if(value) {
            const assignmentsArrValue: ManagedEBookAssignmentImpl[] = [];
            this.assignments?.forEach(element => {
                assignmentsArrValue.push((element instanceof ManagedEBookAssignmentImpl? element as ManagedEBookAssignmentImpl:new ManagedEBookAssignmentImpl(element)));
            });
            this._assignments = assignmentsArrValue;
        }
    };
    /**
     * Instantiates a new managedEBook and sets the default values.
     * @param managedEBookParameterValue 
     */
    public constructor(managedEBookParameterValue?: ManagedEBook | undefined) {
        super(managedEBookParameterValue);
        this._assignments = managedEBookParameterValue?.assignments;
        this._createdDateTime = managedEBookParameterValue?.createdDateTime;
        this._description = managedEBookParameterValue?.description;
        this._deviceStates = managedEBookParameterValue?.deviceStates;
        this._displayName = managedEBookParameterValue?.displayName;
        this._informationUrl = managedEBookParameterValue?.informationUrl;
        this._installSummary = managedEBookParameterValue?.installSummary;
        this._largeCover = managedEBookParameterValue?.largeCover;
        this._lastModifiedDateTime = managedEBookParameterValue?.lastModifiedDateTime;
        this._privacyInformationUrl = managedEBookParameterValue?.privacyInformationUrl;
        this._publishedDateTime = managedEBookParameterValue?.publishedDateTime;
        this._publisher = managedEBookParameterValue?.publisher;
        this._userStateSummary = managedEBookParameterValue?.userStateSummary;
    };
    /**
     * Gets the createdDateTime property value. The date and time when the eBook file was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time when the eBook file was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the description property value. Description.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the deviceStates property value. The list of installation states for this eBook.
     * @returns a DeviceInstallStateInterface
     */
    public get deviceStates() {
        return this._deviceStates;
    };
    /**
     * Sets the deviceStates property value. The list of installation states for this eBook.
     * @param value Value to set for the deviceStates property.
     */
    public set deviceStates(value: DeviceInstallState[] | undefined) {
        if(value) {
            const deviceStatesArrValue: DeviceInstallStateImpl[] = [];
            this.deviceStates?.forEach(element => {
                deviceStatesArrValue.push((element instanceof DeviceInstallStateImpl? element as DeviceInstallStateImpl:new DeviceInstallStateImpl(element)));
            });
            this._deviceStates = deviceStatesArrValue;
        }
    };
    /**
     * Gets the displayName property value. Name of the eBook.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the eBook.
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
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<ManagedEBookAssignmentImpl>(createManagedEBookAssignmentFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "deviceStates": n => { this.deviceStates = n.getCollectionOfObjectValues<DeviceInstallStateImpl>(createDeviceInstallStateFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "informationUrl": n => { this.informationUrl = n.getStringValue(); },
            "installSummary": n => { this.installSummary = n.getObjectValue<EBookInstallSummaryImpl>(createEBookInstallSummaryFromDiscriminatorValue); },
            "largeCover": n => { this.largeCover = n.getObjectValue<MimeContentImpl>(createMimeContentFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "privacyInformationUrl": n => { this.privacyInformationUrl = n.getStringValue(); },
            "publishedDateTime": n => { this.publishedDateTime = n.getDateValue(); },
            "publisher": n => { this.publisher = n.getStringValue(); },
            "userStateSummary": n => { this.userStateSummary = n.getCollectionOfObjectValues<UserInstallStateSummaryImpl>(createUserInstallStateSummaryFromDiscriminatorValue); },
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
     * Gets the installSummary property value. Mobile App Install Summary.
     * @returns a EBookInstallSummaryInterface
     */
    public get installSummary() {
        return this._installSummary;
    };
    /**
     * Sets the installSummary property value. Mobile App Install Summary.
     * @param value Value to set for the installSummary property.
     */
    public set installSummary(value: EBookInstallSummary | undefined) {
        if(value) {
            this._installSummary = value instanceof EBookInstallSummaryImpl? value as EBookInstallSummaryImpl: new EBookInstallSummaryImpl(value);
        }
    };
    /**
     * Gets the largeCover property value. Book cover.
     * @returns a MimeContentInterface
     */
    public get largeCover() {
        return this._largeCover;
    };
    /**
     * Sets the largeCover property value. Book cover.
     * @param value Value to set for the largeCover property.
     */
    public set largeCover(value: MimeContent | undefined) {
        if(value) {
            this._largeCover = value instanceof MimeContentImpl? value as MimeContentImpl: new MimeContentImpl(value);
        }
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time when the eBook was last modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time when the eBook was last modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
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
     * Gets the publishedDateTime property value. The date and time when the eBook was published.
     * @returns a Date
     */
    public get publishedDateTime() {
        return this._publishedDateTime;
    };
    /**
     * Sets the publishedDateTime property value. The date and time when the eBook was published.
     * @param value Value to set for the publishedDateTime property.
     */
    public set publishedDateTime(value: Date | undefined) {
        if(value) {
            this._publishedDateTime = value;
        }
    };
    /**
     * Gets the publisher property value. Publisher.
     * @returns a string
     */
    public get publisher() {
        return this._publisher;
    };
    /**
     * Sets the publisher property value. Publisher.
     * @param value Value to set for the publisher property.
     */
    public set publisher(value: string | undefined) {
        if(value) {
            this._publisher = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: ManagedEBookAssignmentImpl[] = [];
        this.assignments?.forEach(element => {
            assignmentsArrValue.push((element instanceof ManagedEBookAssignmentImpl? element as ManagedEBookAssignmentImpl:new ManagedEBookAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedEBookAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.deviceStates && this.deviceStates.length != 0){        const deviceStatesArrValue: DeviceInstallStateImpl[] = [];
        this.deviceStates?.forEach(element => {
            deviceStatesArrValue.push((element instanceof DeviceInstallStateImpl? element as DeviceInstallStateImpl:new DeviceInstallStateImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceInstallStateImpl>("deviceStates", deviceStatesArrValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.informationUrl){
            writer.writeStringValue("informationUrl", this.informationUrl);
        }
        if(this.installSummary){
            writer.writeObjectValue<EBookInstallSummaryImpl>("installSummary", (this.installSummary instanceof EBookInstallSummaryImpl? this.installSummary as EBookInstallSummaryImpl: new EBookInstallSummaryImpl(this.installSummary)));
        }
        if(this.largeCover){
            writer.writeObjectValue<MimeContentImpl>("largeCover", (this.largeCover instanceof MimeContentImpl? this.largeCover as MimeContentImpl: new MimeContentImpl(this.largeCover)));
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.privacyInformationUrl){
            writer.writeStringValue("privacyInformationUrl", this.privacyInformationUrl);
        }
        if(this.publishedDateTime){
            writer.writeDateValue("publishedDateTime", this.publishedDateTime);
        }
        if(this.publisher){
            writer.writeStringValue("publisher", this.publisher);
        }
        if(this.userStateSummary && this.userStateSummary.length != 0){        const userStateSummaryArrValue: UserInstallStateSummaryImpl[] = [];
        this.userStateSummary?.forEach(element => {
            userStateSummaryArrValue.push((element instanceof UserInstallStateSummaryImpl? element as UserInstallStateSummaryImpl:new UserInstallStateSummaryImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UserInstallStateSummaryImpl>("userStateSummary", userStateSummaryArrValue);
        }
    };
    /**
     * Gets the userStateSummary property value. The list of installation states for this eBook.
     * @returns a UserInstallStateSummaryInterface
     */
    public get userStateSummary() {
        return this._userStateSummary;
    };
    /**
     * Sets the userStateSummary property value. The list of installation states for this eBook.
     * @param value Value to set for the userStateSummary property.
     */
    public set userStateSummary(value: UserInstallStateSummary[] | undefined) {
        if(value) {
            const userStateSummaryArrValue: UserInstallStateSummaryImpl[] = [];
            this.userStateSummary?.forEach(element => {
                userStateSummaryArrValue.push((element instanceof UserInstallStateSummaryImpl? element as UserInstallStateSummaryImpl:new UserInstallStateSummaryImpl(element)));
            });
            this._userStateSummary = userStateSummaryArrValue;
        }
    };
}
