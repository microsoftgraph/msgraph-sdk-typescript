import {createFreeBusyErrorFromDiscriminatorValue} from './createFreeBusyErrorFromDiscriminatorValue';
import {createScheduleItemFromDiscriminatorValue} from './createScheduleItemFromDiscriminatorValue';
import {createWorkingHoursFromDiscriminatorValue} from './createWorkingHoursFromDiscriminatorValue';
import {FreeBusyError} from './freeBusyError';
import {FreeBusyErrorImpl, ScheduleItemImpl, WorkingHoursImpl} from './index';
import {ScheduleInformation} from './scheduleInformation';
import {ScheduleItem} from './scheduleItem';
import {WorkingHours} from './workingHours';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScheduleInformationImpl implements ScheduleInformation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Represents a merged view of availability of all the items in scheduleItems. The view consists of time slots. Availability during each time slot is indicated with: 0= free, 1= tentative, 2= busy, 3= out of office, 4= working elsewhere. */
    private _availabilityView?: string | undefined;
    /** Error information from attempting to get the availability of the user, distribution list, or resource. */
    private _error_escaped?: FreeBusyError | undefined;
    /** An SMTP address of the user, distribution list, or resource, identifying an instance of scheduleInformation. */
    private _scheduleId?: string | undefined;
    /** Contains the items that describe the availability of the user or resource. */
    private _scheduleItems?: ScheduleItem[] | undefined;
    /** The days of the week and hours in a specific time zone that the user works. These are set as part of the user's mailboxSettings. */
    private _workingHours?: WorkingHours | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the availabilityView property value. Represents a merged view of availability of all the items in scheduleItems. The view consists of time slots. Availability during each time slot is indicated with: 0= free, 1= tentative, 2= busy, 3= out of office, 4= working elsewhere.
     * @returns a string
     */
    public get availabilityView() {
        return this._availabilityView;
    };
    /**
     * Sets the availabilityView property value. Represents a merged view of availability of all the items in scheduleItems. The view consists of time slots. Availability during each time slot is indicated with: 0= free, 1= tentative, 2= busy, 3= out of office, 4= working elsewhere.
     * @param value Value to set for the availabilityView property.
     */
    public set availabilityView(value: string | undefined) {
        if(value) {
            this._availabilityView = value;
        }
    };
    /**
     * Instantiates a new scheduleInformation and sets the default values.
     * @param scheduleInformationParameterValue 
     */
    public constructor(scheduleInformationParameterValue?: ScheduleInformation | undefined) {
        this._additionalData = scheduleInformationParameterValue?.additionalData ? scheduleInformationParameterValue?.additionalData! : {};
        this._availabilityView = scheduleInformationParameterValue?.availabilityView;
        this._error_escaped = scheduleInformationParameterValue?.error_escaped;
        this._scheduleId = scheduleInformationParameterValue?.scheduleId;
        this._scheduleItems = scheduleInformationParameterValue?.scheduleItems;
        this._workingHours = scheduleInformationParameterValue?.workingHours;
    };
    /**
     * Gets the error property value. Error information from attempting to get the availability of the user, distribution list, or resource.
     * @returns a FreeBusyErrorInterface
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. Error information from attempting to get the availability of the user, distribution list, or resource.
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: FreeBusyError | undefined) {
        if(value) {
            this._error_escaped = value instanceof FreeBusyErrorImpl? value : new FreeBusyErrorImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "availabilityView": n => { this.availabilityView = n.getStringValue(); },
            "error": n => { this.error_escaped = n.getObjectValue<FreeBusyErrorImpl>(createFreeBusyErrorFromDiscriminatorValue); },
            "scheduleId": n => { this.scheduleId = n.getStringValue(); },
            "scheduleItems": n => { this.scheduleItems = n.getCollectionOfObjectValues<ScheduleItemImpl>(createScheduleItemFromDiscriminatorValue); },
            "workingHours": n => { this.workingHours = n.getObjectValue<WorkingHoursImpl>(createWorkingHoursFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the scheduleId property value. An SMTP address of the user, distribution list, or resource, identifying an instance of scheduleInformation.
     * @returns a string
     */
    public get scheduleId() {
        return this._scheduleId;
    };
    /**
     * Sets the scheduleId property value. An SMTP address of the user, distribution list, or resource, identifying an instance of scheduleInformation.
     * @param value Value to set for the scheduleId property.
     */
    public set scheduleId(value: string | undefined) {
        if(value) {
            this._scheduleId = value;
        }
    };
    /**
     * Gets the scheduleItems property value. Contains the items that describe the availability of the user or resource.
     * @returns a ScheduleItemInterface
     */
    public get scheduleItems() {
        return this._scheduleItems;
    };
    /**
     * Sets the scheduleItems property value. Contains the items that describe the availability of the user or resource.
     * @param value Value to set for the scheduleItems property.
     */
    public set scheduleItems(value: ScheduleItem[] | undefined) {
        if(value) {
            const scheduleItemsArrValue: ScheduleItemImpl[] = [];
            this.scheduleItems?.forEach(element => {
                scheduleItemsArrValue.push((element instanceof ScheduleItemImpl? element:new ScheduleItemImpl(element)));
            });
            this._scheduleItems = scheduleItemsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.availabilityView){
            writer.writeStringValue("availabilityView", this.availabilityView);
        }
        if(this.error_escaped){
            writer.writeObjectValue<FreeBusyErrorImpl>("error", (!this.error_escaped || this.error_escaped instanceof FreeBusyErrorImpl? this.error_escaped : new FreeBusyErrorImpl(this.error_escaped)));
        }
        if(this.scheduleId){
            writer.writeStringValue("scheduleId", this.scheduleId);
        }
        if(this.scheduleItems && this.scheduleItems.length != 0){        const scheduleItemsArrValue: ScheduleItemImpl[] = [];
        this.scheduleItems?.forEach(element => {
            scheduleItemsArrValue.push((element instanceof ScheduleItemImpl? element:new ScheduleItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ScheduleItemImpl>("scheduleItems", scheduleItemsArrValue);
        }
        if(this.workingHours){
            writer.writeObjectValue<WorkingHoursImpl>("workingHours", (!this.workingHours || this.workingHours instanceof WorkingHoursImpl? this.workingHours : new WorkingHoursImpl(this.workingHours)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the workingHours property value. The days of the week and hours in a specific time zone that the user works. These are set as part of the user's mailboxSettings.
     * @returns a WorkingHoursInterface
     */
    public get workingHours() {
        return this._workingHours;
    };
    /**
     * Sets the workingHours property value. The days of the week and hours in a specific time zone that the user works. These are set as part of the user's mailboxSettings.
     * @param value Value to set for the workingHours property.
     */
    public set workingHours(value: WorkingHours | undefined) {
        if(value) {
            this._workingHours = value instanceof WorkingHoursImpl? value : new WorkingHoursImpl(value);
        }
    };
}
