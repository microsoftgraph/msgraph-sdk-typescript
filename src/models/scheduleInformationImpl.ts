import {createFreeBusyErrorFromDiscriminatorValue} from './createFreeBusyErrorFromDiscriminatorValue';
import {createScheduleItemFromDiscriminatorValue} from './createScheduleItemFromDiscriminatorValue';
import {createWorkingHoursFromDiscriminatorValue} from './createWorkingHoursFromDiscriminatorValue';
import {FreeBusyError} from './freeBusyError';
import {FreeBusyErrorImpl, ScheduleItemImpl, WorkingHoursImpl} from './index';
import {ScheduleInformation} from './scheduleInformation';
import {ScheduleItem} from './scheduleItem';
import {WorkingHours} from './workingHours';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScheduleInformationImpl implements AdditionalDataHolder, Parsable, ScheduleInformation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents a merged view of availability of all the items in scheduleItems. The view consists of time slots. Availability during each time slot is indicated with: 0= free, 1= tentative, 2= busy, 3= out of office, 4= working elsewhere. */
    public availabilityView?: string | undefined;
    /** Error information from attempting to get the availability of the user, distribution list, or resource. */
    public error_escaped?: FreeBusyError | undefined;
    /** An SMTP address of the user, distribution list, or resource, identifying an instance of scheduleInformation. */
    public scheduleId?: string | undefined;
    /** Contains the items that describe the availability of the user or resource. */
    public scheduleItems?: ScheduleItem[] | undefined;
    /** The days of the week and hours in a specific time zone that the user works. These are set as part of the user's mailboxSettings. */
    public workingHours?: WorkingHours | undefined;
    /**
     * Instantiates a new scheduleInformation and sets the default values.
     * @param scheduleInformationParameterValue 
     */
    public constructor(scheduleInformationParameterValue?: ScheduleInformation | undefined) {
        this.additionalData = scheduleInformationParameterValue?.additionalData ? scheduleInformationParameterValue?.additionalData! : {}
        this.availabilityView = scheduleInformationParameterValue?.availabilityView ;
        this.error_escaped = scheduleInformationParameterValue?.error_escaped ;
        this.scheduleId = scheduleInformationParameterValue?.scheduleId ;
        this.scheduleItems = scheduleInformationParameterValue?.scheduleItems ;
        this.workingHours = scheduleInformationParameterValue?.workingHours ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.availabilityView){
        writer.writeStringValue("availabilityView", this.availabilityView);
        }
        if(this.error_escaped){
        writer.writeObjectValue<FreeBusyErrorImpl>("error", new FreeBusyErrorImpl(this.error_escaped));
        }
        if(this.scheduleId){
        writer.writeStringValue("scheduleId", this.scheduleId);
        }
        if(this.scheduleItems && this.scheduleItems.length != 0){        const scheduleItemsArrValue: ScheduleItemImpl[] = []; this.scheduleItems?.forEach(element => {scheduleItemsArrValue.push(new ScheduleItemImpl(element));});
        writer.writeCollectionOfObjectValues<ScheduleItemImpl>("scheduleItems", scheduleItemsArrValue);
        }
        if(this.workingHours){
        writer.writeObjectValue<WorkingHoursImpl>("workingHours", new WorkingHoursImpl(this.workingHours));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
