import {createOfferShiftRequestFromDiscriminatorValue} from './createOfferShiftRequestFromDiscriminatorValue';
import {createOpenShiftChangeRequestFromDiscriminatorValue} from './createOpenShiftChangeRequestFromDiscriminatorValue';
import {createOpenShiftFromDiscriminatorValue} from './createOpenShiftFromDiscriminatorValue';
import {createSchedulingGroupFromDiscriminatorValue} from './createSchedulingGroupFromDiscriminatorValue';
import {createShiftFromDiscriminatorValue} from './createShiftFromDiscriminatorValue';
import {createSwapShiftsChangeRequestFromDiscriminatorValue} from './createSwapShiftsChangeRequestFromDiscriminatorValue';
import {createTimeOffFromDiscriminatorValue} from './createTimeOffFromDiscriminatorValue';
import {createTimeOffReasonFromDiscriminatorValue} from './createTimeOffReasonFromDiscriminatorValue';
import {createTimeOffRequestFromDiscriminatorValue} from './createTimeOffRequestFromDiscriminatorValue';
import {EntityImpl, OfferShiftRequestImpl, OpenShiftChangeRequestImpl, OpenShiftImpl, SchedulingGroupImpl, ShiftImpl, SwapShiftsChangeRequestImpl, TimeOffImpl, TimeOffReasonImpl, TimeOffRequestImpl} from './index';
import {OfferShiftRequest} from './offerShiftRequest';
import {OpenShift} from './openShift';
import {OpenShiftChangeRequest} from './openShiftChangeRequest';
import {OperationStatus} from './operationStatus';
import {Schedule} from './schedule';
import {SchedulingGroup} from './schedulingGroup';
import {Shift} from './shift';
import {SwapShiftsChangeRequest} from './swapShiftsChangeRequest';
import {TimeOff} from './timeOff';
import {TimeOffReason} from './timeOffReason';
import {TimeOffRequest} from './timeOffRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScheduleImpl extends EntityImpl implements Parsable, Schedule {
    /** Indicates whether the schedule is enabled for the team. Required. */
    enabled?: boolean | undefined;
    /** The offerShiftRequests property */
    offerShiftRequests?: OfferShiftRequest[] | undefined;
    /** Indicates whether offer shift requests are enabled for the schedule. */
    offerShiftRequestsEnabled?: boolean | undefined;
    /** The openShiftChangeRequests property */
    openShiftChangeRequests?: OpenShiftChangeRequest[] | undefined;
    /** The openShifts property */
    openShifts?: OpenShift[] | undefined;
    /** Indicates whether open shifts are enabled for the schedule. */
    openShiftsEnabled?: boolean | undefined;
    /** The status of the schedule provisioning. The possible values are notStarted, running, completed, failed. */
    provisionStatus?: OperationStatus | undefined;
    /** Additional information about why schedule provisioning failed. */
    provisionStatusCode?: string | undefined;
    /** The logical grouping of users in the schedule (usually by role). */
    schedulingGroups?: SchedulingGroup[] | undefined;
    /** The shifts in the schedule. */
    shifts?: Shift[] | undefined;
    /** The swapShiftsChangeRequests property */
    swapShiftsChangeRequests?: SwapShiftsChangeRequest[] | undefined;
    /** Indicates whether swap shifts requests are enabled for the schedule. */
    swapShiftsRequestsEnabled?: boolean | undefined;
    /** Indicates whether time clock is enabled for the schedule. */
    timeClockEnabled?: boolean | undefined;
    /** The set of reasons for a time off in the schedule. */
    timeOffReasons?: TimeOffReason[] | undefined;
    /** The timeOffRequests property */
    timeOffRequests?: TimeOffRequest[] | undefined;
    /** Indicates whether time off requests are enabled for the schedule. */
    timeOffRequestsEnabled?: boolean | undefined;
    /** The instances of times off in the schedule. */
    timesOff?: TimeOff[] | undefined;
    /** Indicates the time zone of the schedule team using tz database format. Required. */
    timeZone?: string | undefined;
    /** The workforceIntegrationIds property */
    workforceIntegrationIds?: string[] | undefined;
    /**
     * Instantiates a new schedule and sets the default values.
     * @param scheduleParameterValue 
     */
    public constructor(scheduleParameterValue?: Schedule | undefined) {
        super();
        this.enabled = scheduleParameterValue?.enabled ;
        this.offerShiftRequests = scheduleParameterValue?.offerShiftRequests ;
        this.offerShiftRequestsEnabled = scheduleParameterValue?.offerShiftRequestsEnabled ;
        this.openShiftChangeRequests = scheduleParameterValue?.openShiftChangeRequests ;
        this.openShifts = scheduleParameterValue?.openShifts ;
        this.openShiftsEnabled = scheduleParameterValue?.openShiftsEnabled ;
        this.provisionStatus = scheduleParameterValue?.provisionStatus ;
        this.provisionStatusCode = scheduleParameterValue?.provisionStatusCode ;
        this.schedulingGroups = scheduleParameterValue?.schedulingGroups ;
        this.shifts = scheduleParameterValue?.shifts ;
        this.swapShiftsChangeRequests = scheduleParameterValue?.swapShiftsChangeRequests ;
        this.swapShiftsRequestsEnabled = scheduleParameterValue?.swapShiftsRequestsEnabled ;
        this.timeClockEnabled = scheduleParameterValue?.timeClockEnabled ;
        this.timeOffReasons = scheduleParameterValue?.timeOffReasons ;
        this.timeOffRequests = scheduleParameterValue?.timeOffRequests ;
        this.timeOffRequestsEnabled = scheduleParameterValue?.timeOffRequestsEnabled ;
        this.timesOff = scheduleParameterValue?.timesOff ;
        this.timeZone = scheduleParameterValue?.timeZone ;
        this.workforceIntegrationIds = scheduleParameterValue?.workforceIntegrationIds ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "offerShiftRequests": n => { this.offerShiftRequests = n.getCollectionOfObjectValues<OfferShiftRequestImpl>(createOfferShiftRequestFromDiscriminatorValue); },
            "offerShiftRequestsEnabled": n => { this.offerShiftRequestsEnabled = n.getBooleanValue(); },
            "openShiftChangeRequests": n => { this.openShiftChangeRequests = n.getCollectionOfObjectValues<OpenShiftChangeRequestImpl>(createOpenShiftChangeRequestFromDiscriminatorValue); },
            "openShifts": n => { this.openShifts = n.getCollectionOfObjectValues<OpenShiftImpl>(createOpenShiftFromDiscriminatorValue); },
            "openShiftsEnabled": n => { this.openShiftsEnabled = n.getBooleanValue(); },
            "provisionStatus": n => { this.provisionStatus = n.getEnumValue<OperationStatus>(OperationStatus); },
            "provisionStatusCode": n => { this.provisionStatusCode = n.getStringValue(); },
            "schedulingGroups": n => { this.schedulingGroups = n.getCollectionOfObjectValues<SchedulingGroupImpl>(createSchedulingGroupFromDiscriminatorValue); },
            "shifts": n => { this.shifts = n.getCollectionOfObjectValues<ShiftImpl>(createShiftFromDiscriminatorValue); },
            "swapShiftsChangeRequests": n => { this.swapShiftsChangeRequests = n.getCollectionOfObjectValues<SwapShiftsChangeRequestImpl>(createSwapShiftsChangeRequestFromDiscriminatorValue); },
            "swapShiftsRequestsEnabled": n => { this.swapShiftsRequestsEnabled = n.getBooleanValue(); },
            "timeClockEnabled": n => { this.timeClockEnabled = n.getBooleanValue(); },
            "timeOffReasons": n => { this.timeOffReasons = n.getCollectionOfObjectValues<TimeOffReasonImpl>(createTimeOffReasonFromDiscriminatorValue); },
            "timeOffRequests": n => { this.timeOffRequests = n.getCollectionOfObjectValues<TimeOffRequestImpl>(createTimeOffRequestFromDiscriminatorValue); },
            "timeOffRequestsEnabled": n => { this.timeOffRequestsEnabled = n.getBooleanValue(); },
            "timesOff": n => { this.timesOff = n.getCollectionOfObjectValues<TimeOffImpl>(createTimeOffFromDiscriminatorValue); },
            "timeZone": n => { this.timeZone = n.getStringValue(); },
            "workforceIntegrationIds": n => { this.workforceIntegrationIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.enabled){
        if(this.enabled)
        writer.writeBooleanValue("enabled", this.enabled);
        }
        if(this.offerShiftRequests){
        const offerShiftRequestsArrValue: OfferShiftRequestImpl[] = []; this.offerShiftRequests?.forEach(element => {offerShiftRequestsArrValue.push(new OfferShiftRequestImpl(element));});
        writer.writeCollectionOfObjectValues<OfferShiftRequestImpl>("offerShiftRequests", offerShiftRequestsArrValue);
        }
        if(this.offerShiftRequestsEnabled){
        if(this.offerShiftRequestsEnabled)
        writer.writeBooleanValue("offerShiftRequestsEnabled", this.offerShiftRequestsEnabled);
        }
        if(this.openShiftChangeRequests){
        const openShiftChangeRequestsArrValue: OpenShiftChangeRequestImpl[] = []; this.openShiftChangeRequests?.forEach(element => {openShiftChangeRequestsArrValue.push(new OpenShiftChangeRequestImpl(element));});
        writer.writeCollectionOfObjectValues<OpenShiftChangeRequestImpl>("openShiftChangeRequests", openShiftChangeRequestsArrValue);
        }
        if(this.openShifts){
        const openShiftsArrValue: OpenShiftImpl[] = []; this.openShifts?.forEach(element => {openShiftsArrValue.push(new OpenShiftImpl(element));});
        writer.writeCollectionOfObjectValues<OpenShiftImpl>("openShifts", openShiftsArrValue);
        }
        if(this.openShiftsEnabled){
        if(this.openShiftsEnabled)
        writer.writeBooleanValue("openShiftsEnabled", this.openShiftsEnabled);
        }
        if(this.provisionStatus){
        if(this.provisionStatus)
        writer.writeEnumValue<OperationStatus>("provisionStatus", this.provisionStatus);
        }
        if(this.provisionStatusCode){
        if(this.provisionStatusCode)
        writer.writeStringValue("provisionStatusCode", this.provisionStatusCode);
        }
        if(this.schedulingGroups){
        const schedulingGroupsArrValue: SchedulingGroupImpl[] = []; this.schedulingGroups?.forEach(element => {schedulingGroupsArrValue.push(new SchedulingGroupImpl(element));});
        writer.writeCollectionOfObjectValues<SchedulingGroupImpl>("schedulingGroups", schedulingGroupsArrValue);
        }
        if(this.shifts){
        const shiftsArrValue: ShiftImpl[] = []; this.shifts?.forEach(element => {shiftsArrValue.push(new ShiftImpl(element));});
        writer.writeCollectionOfObjectValues<ShiftImpl>("shifts", shiftsArrValue);
        }
        if(this.swapShiftsChangeRequests){
        const swapShiftsChangeRequestsArrValue: SwapShiftsChangeRequestImpl[] = []; this.swapShiftsChangeRequests?.forEach(element => {swapShiftsChangeRequestsArrValue.push(new SwapShiftsChangeRequestImpl(element));});
        writer.writeCollectionOfObjectValues<SwapShiftsChangeRequestImpl>("swapShiftsChangeRequests", swapShiftsChangeRequestsArrValue);
        }
        if(this.swapShiftsRequestsEnabled){
        if(this.swapShiftsRequestsEnabled)
        writer.writeBooleanValue("swapShiftsRequestsEnabled", this.swapShiftsRequestsEnabled);
        }
        if(this.timeClockEnabled){
        if(this.timeClockEnabled)
        writer.writeBooleanValue("timeClockEnabled", this.timeClockEnabled);
        }
        if(this.timeOffReasons){
        const timeOffReasonsArrValue: TimeOffReasonImpl[] = []; this.timeOffReasons?.forEach(element => {timeOffReasonsArrValue.push(new TimeOffReasonImpl(element));});
        writer.writeCollectionOfObjectValues<TimeOffReasonImpl>("timeOffReasons", timeOffReasonsArrValue);
        }
        if(this.timeOffRequests){
        const timeOffRequestsArrValue: TimeOffRequestImpl[] = []; this.timeOffRequests?.forEach(element => {timeOffRequestsArrValue.push(new TimeOffRequestImpl(element));});
        writer.writeCollectionOfObjectValues<TimeOffRequestImpl>("timeOffRequests", timeOffRequestsArrValue);
        }
        if(this.timeOffRequestsEnabled){
        if(this.timeOffRequestsEnabled)
        writer.writeBooleanValue("timeOffRequestsEnabled", this.timeOffRequestsEnabled);
        }
        if(this.timesOff){
        const timesOffArrValue: TimeOffImpl[] = []; this.timesOff?.forEach(element => {timesOffArrValue.push(new TimeOffImpl(element));});
        writer.writeCollectionOfObjectValues<TimeOffImpl>("timesOff", timesOffArrValue);
        }
        if(this.timeZone){
        if(this.timeZone)
        writer.writeStringValue("timeZone", this.timeZone);
        }
        if(this.workforceIntegrationIds){
        if(this.workforceIntegrationIds)
        writer.writeCollectionOfPrimitiveValues<string>("workforceIntegrationIds", this.workforceIntegrationIds);
        }
    };
}
