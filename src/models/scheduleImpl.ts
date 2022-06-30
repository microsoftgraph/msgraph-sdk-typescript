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

/** Casts the previous resource to group. */
export class ScheduleImpl extends EntityImpl implements Schedule {
    /** Indicates whether the schedule is enabled for the team. Required. */
    private _enabled?: boolean | undefined;
    /** The offerShiftRequests property */
    private _offerShiftRequests?: OfferShiftRequest[] | undefined;
    /** Indicates whether offer shift requests are enabled for the schedule. */
    private _offerShiftRequestsEnabled?: boolean | undefined;
    /** The openShiftChangeRequests property */
    private _openShiftChangeRequests?: OpenShiftChangeRequest[] | undefined;
    /** The openShifts property */
    private _openShifts?: OpenShift[] | undefined;
    /** Indicates whether open shifts are enabled for the schedule. */
    private _openShiftsEnabled?: boolean | undefined;
    /** The status of the schedule provisioning. The possible values are notStarted, running, completed, failed. */
    private _provisionStatus?: OperationStatus | undefined;
    /** Additional information about why schedule provisioning failed. */
    private _provisionStatusCode?: string | undefined;
    /** The logical grouping of users in the schedule (usually by role). */
    private _schedulingGroups?: SchedulingGroup[] | undefined;
    /** The shifts in the schedule. */
    private _shifts?: Shift[] | undefined;
    /** The swapShiftsChangeRequests property */
    private _swapShiftsChangeRequests?: SwapShiftsChangeRequest[] | undefined;
    /** Indicates whether swap shifts requests are enabled for the schedule. */
    private _swapShiftsRequestsEnabled?: boolean | undefined;
    /** Indicates whether time clock is enabled for the schedule. */
    private _timeClockEnabled?: boolean | undefined;
    /** The set of reasons for a time off in the schedule. */
    private _timeOffReasons?: TimeOffReason[] | undefined;
    /** The timeOffRequests property */
    private _timeOffRequests?: TimeOffRequest[] | undefined;
    /** Indicates whether time off requests are enabled for the schedule. */
    private _timeOffRequestsEnabled?: boolean | undefined;
    /** The instances of times off in the schedule. */
    private _timesOff?: TimeOff[] | undefined;
    /** Indicates the time zone of the schedule team using tz database format. Required. */
    private _timeZone?: string | undefined;
    /** The workforceIntegrationIds property */
    private _workforceIntegrationIds?: string[] | undefined;
    /**
     * Instantiates a new schedule and sets the default values.
     * @param scheduleParameterValue 
     */
    public constructor(scheduleParameterValue?: Schedule | undefined) {
        super(scheduleParameterValue);
        this._enabled = scheduleParameterValue?.enabled;
        this._offerShiftRequests = scheduleParameterValue?.offerShiftRequests;
        this._offerShiftRequestsEnabled = scheduleParameterValue?.offerShiftRequestsEnabled;
        this._openShiftChangeRequests = scheduleParameterValue?.openShiftChangeRequests;
        this._openShifts = scheduleParameterValue?.openShifts;
        this._openShiftsEnabled = scheduleParameterValue?.openShiftsEnabled;
        this._provisionStatus = scheduleParameterValue?.provisionStatus;
        this._provisionStatusCode = scheduleParameterValue?.provisionStatusCode;
        this._schedulingGroups = scheduleParameterValue?.schedulingGroups;
        this._shifts = scheduleParameterValue?.shifts;
        this._swapShiftsChangeRequests = scheduleParameterValue?.swapShiftsChangeRequests;
        this._swapShiftsRequestsEnabled = scheduleParameterValue?.swapShiftsRequestsEnabled;
        this._timeClockEnabled = scheduleParameterValue?.timeClockEnabled;
        this._timeOffReasons = scheduleParameterValue?.timeOffReasons;
        this._timeOffRequests = scheduleParameterValue?.timeOffRequests;
        this._timeOffRequestsEnabled = scheduleParameterValue?.timeOffRequestsEnabled;
        this._timesOff = scheduleParameterValue?.timesOff;
        this._timeZone = scheduleParameterValue?.timeZone;
        this._workforceIntegrationIds = scheduleParameterValue?.workforceIntegrationIds;
    };
    /**
     * Gets the enabled property value. Indicates whether the schedule is enabled for the team. Required.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Indicates whether the schedule is enabled for the team. Required.
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        if(value) {
            this._enabled = value;
        }
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
     * Gets the offerShiftRequests property value. The offerShiftRequests property
     * @returns a OfferShiftRequestInterface
     */
    public get offerShiftRequests() {
        return this._offerShiftRequests;
    };
    /**
     * Sets the offerShiftRequests property value. The offerShiftRequests property
     * @param value Value to set for the offerShiftRequests property.
     */
    public set offerShiftRequests(value: OfferShiftRequest[] | undefined) {
        if(value) {
            const offerShiftRequestsArrValue: OfferShiftRequestImpl[] = [];
            this.offerShiftRequests?.forEach(element => {
                offerShiftRequestsArrValue.push((element instanceof OfferShiftRequestImpl? element:new OfferShiftRequestImpl(element)));
            });
            this._offerShiftRequests = offerShiftRequestsArrValue;
        }
    };
    /**
     * Gets the offerShiftRequestsEnabled property value. Indicates whether offer shift requests are enabled for the schedule.
     * @returns a boolean
     */
    public get offerShiftRequestsEnabled() {
        return this._offerShiftRequestsEnabled;
    };
    /**
     * Sets the offerShiftRequestsEnabled property value. Indicates whether offer shift requests are enabled for the schedule.
     * @param value Value to set for the offerShiftRequestsEnabled property.
     */
    public set offerShiftRequestsEnabled(value: boolean | undefined) {
        if(value) {
            this._offerShiftRequestsEnabled = value;
        }
    };
    /**
     * Gets the openShiftChangeRequests property value. The openShiftChangeRequests property
     * @returns a OpenShiftChangeRequestInterface
     */
    public get openShiftChangeRequests() {
        return this._openShiftChangeRequests;
    };
    /**
     * Sets the openShiftChangeRequests property value. The openShiftChangeRequests property
     * @param value Value to set for the openShiftChangeRequests property.
     */
    public set openShiftChangeRequests(value: OpenShiftChangeRequest[] | undefined) {
        if(value) {
            const openShiftChangeRequestsArrValue: OpenShiftChangeRequestImpl[] = [];
            this.openShiftChangeRequests?.forEach(element => {
                openShiftChangeRequestsArrValue.push((element instanceof OpenShiftChangeRequestImpl? element:new OpenShiftChangeRequestImpl(element)));
            });
            this._openShiftChangeRequests = openShiftChangeRequestsArrValue;
        }
    };
    /**
     * Gets the openShifts property value. The openShifts property
     * @returns a OpenShiftInterface
     */
    public get openShifts() {
        return this._openShifts;
    };
    /**
     * Sets the openShifts property value. The openShifts property
     * @param value Value to set for the openShifts property.
     */
    public set openShifts(value: OpenShift[] | undefined) {
        if(value) {
            const openShiftsArrValue: OpenShiftImpl[] = [];
            this.openShifts?.forEach(element => {
                openShiftsArrValue.push((element instanceof OpenShiftImpl? element:new OpenShiftImpl(element)));
            });
            this._openShifts = openShiftsArrValue;
        }
    };
    /**
     * Gets the openShiftsEnabled property value. Indicates whether open shifts are enabled for the schedule.
     * @returns a boolean
     */
    public get openShiftsEnabled() {
        return this._openShiftsEnabled;
    };
    /**
     * Sets the openShiftsEnabled property value. Indicates whether open shifts are enabled for the schedule.
     * @param value Value to set for the openShiftsEnabled property.
     */
    public set openShiftsEnabled(value: boolean | undefined) {
        if(value) {
            this._openShiftsEnabled = value;
        }
    };
    /**
     * Gets the provisionStatus property value. The status of the schedule provisioning. The possible values are notStarted, running, completed, failed.
     * @returns a operationStatus
     */
    public get provisionStatus() {
        return this._provisionStatus;
    };
    /**
     * Sets the provisionStatus property value. The status of the schedule provisioning. The possible values are notStarted, running, completed, failed.
     * @param value Value to set for the provisionStatus property.
     */
    public set provisionStatus(value: OperationStatus | undefined) {
        if(value) {
            this._provisionStatus = value;
        }
    };
    /**
     * Gets the provisionStatusCode property value. Additional information about why schedule provisioning failed.
     * @returns a string
     */
    public get provisionStatusCode() {
        return this._provisionStatusCode;
    };
    /**
     * Sets the provisionStatusCode property value. Additional information about why schedule provisioning failed.
     * @param value Value to set for the provisionStatusCode property.
     */
    public set provisionStatusCode(value: string | undefined) {
        if(value) {
            this._provisionStatusCode = value;
        }
    };
    /**
     * Gets the schedulingGroups property value. The logical grouping of users in the schedule (usually by role).
     * @returns a SchedulingGroupInterface
     */
    public get schedulingGroups() {
        return this._schedulingGroups;
    };
    /**
     * Sets the schedulingGroups property value. The logical grouping of users in the schedule (usually by role).
     * @param value Value to set for the schedulingGroups property.
     */
    public set schedulingGroups(value: SchedulingGroup[] | undefined) {
        if(value) {
            const schedulingGroupsArrValue: SchedulingGroupImpl[] = [];
            this.schedulingGroups?.forEach(element => {
                schedulingGroupsArrValue.push((element instanceof SchedulingGroupImpl? element:new SchedulingGroupImpl(element)));
            });
            this._schedulingGroups = schedulingGroupsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.enabled){
            writer.writeBooleanValue("enabled", this.enabled);
        }
        if(this.offerShiftRequests && this.offerShiftRequests.length != 0){        const offerShiftRequestsArrValue: OfferShiftRequestImpl[] = [];
        this.offerShiftRequests?.forEach(element => {
            offerShiftRequestsArrValue.push((element instanceof OfferShiftRequestImpl? element:new OfferShiftRequestImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OfferShiftRequestImpl>("offerShiftRequests", offerShiftRequestsArrValue);
        }
        if(this.offerShiftRequestsEnabled){
            writer.writeBooleanValue("offerShiftRequestsEnabled", this.offerShiftRequestsEnabled);
        }
        if(this.openShiftChangeRequests && this.openShiftChangeRequests.length != 0){        const openShiftChangeRequestsArrValue: OpenShiftChangeRequestImpl[] = [];
        this.openShiftChangeRequests?.forEach(element => {
            openShiftChangeRequestsArrValue.push((element instanceof OpenShiftChangeRequestImpl? element:new OpenShiftChangeRequestImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OpenShiftChangeRequestImpl>("openShiftChangeRequests", openShiftChangeRequestsArrValue);
        }
        if(this.openShifts && this.openShifts.length != 0){        const openShiftsArrValue: OpenShiftImpl[] = [];
        this.openShifts?.forEach(element => {
            openShiftsArrValue.push((element instanceof OpenShiftImpl? element:new OpenShiftImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OpenShiftImpl>("openShifts", openShiftsArrValue);
        }
        if(this.openShiftsEnabled){
            writer.writeBooleanValue("openShiftsEnabled", this.openShiftsEnabled);
        }
        if(this.provisionStatus){
            writer.writeEnumValue<OperationStatus>("provisionStatus", this.provisionStatus);
        }
        if(this.provisionStatusCode){
            writer.writeStringValue("provisionStatusCode", this.provisionStatusCode);
        }
        if(this.schedulingGroups && this.schedulingGroups.length != 0){        const schedulingGroupsArrValue: SchedulingGroupImpl[] = [];
        this.schedulingGroups?.forEach(element => {
            schedulingGroupsArrValue.push((element instanceof SchedulingGroupImpl? element:new SchedulingGroupImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SchedulingGroupImpl>("schedulingGroups", schedulingGroupsArrValue);
        }
        if(this.shifts && this.shifts.length != 0){        const shiftsArrValue: ShiftImpl[] = [];
        this.shifts?.forEach(element => {
            shiftsArrValue.push((element instanceof ShiftImpl? element:new ShiftImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ShiftImpl>("shifts", shiftsArrValue);
        }
        if(this.swapShiftsChangeRequests && this.swapShiftsChangeRequests.length != 0){        const swapShiftsChangeRequestsArrValue: SwapShiftsChangeRequestImpl[] = [];
        this.swapShiftsChangeRequests?.forEach(element => {
            swapShiftsChangeRequestsArrValue.push((element instanceof SwapShiftsChangeRequestImpl? element:new SwapShiftsChangeRequestImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SwapShiftsChangeRequestImpl>("swapShiftsChangeRequests", swapShiftsChangeRequestsArrValue);
        }
        if(this.swapShiftsRequestsEnabled){
            writer.writeBooleanValue("swapShiftsRequestsEnabled", this.swapShiftsRequestsEnabled);
        }
        if(this.timeClockEnabled){
            writer.writeBooleanValue("timeClockEnabled", this.timeClockEnabled);
        }
        if(this.timeOffReasons && this.timeOffReasons.length != 0){        const timeOffReasonsArrValue: TimeOffReasonImpl[] = [];
        this.timeOffReasons?.forEach(element => {
            timeOffReasonsArrValue.push((element instanceof TimeOffReasonImpl? element:new TimeOffReasonImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TimeOffReasonImpl>("timeOffReasons", timeOffReasonsArrValue);
        }
        if(this.timeOffRequests && this.timeOffRequests.length != 0){        const timeOffRequestsArrValue: TimeOffRequestImpl[] = [];
        this.timeOffRequests?.forEach(element => {
            timeOffRequestsArrValue.push((element instanceof TimeOffRequestImpl? element:new TimeOffRequestImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TimeOffRequestImpl>("timeOffRequests", timeOffRequestsArrValue);
        }
        if(this.timeOffRequestsEnabled){
            writer.writeBooleanValue("timeOffRequestsEnabled", this.timeOffRequestsEnabled);
        }
        if(this.timesOff && this.timesOff.length != 0){        const timesOffArrValue: TimeOffImpl[] = [];
        this.timesOff?.forEach(element => {
            timesOffArrValue.push((element instanceof TimeOffImpl? element:new TimeOffImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TimeOffImpl>("timesOff", timesOffArrValue);
        }
        if(this.timeZone){
            writer.writeStringValue("timeZone", this.timeZone);
        }
        if(this.workforceIntegrationIds){
            writer.writeCollectionOfPrimitiveValues<string>("workforceIntegrationIds", this.workforceIntegrationIds);
        }
    };
    /**
     * Gets the shifts property value. The shifts in the schedule.
     * @returns a ShiftInterface
     */
    public get shifts() {
        return this._shifts;
    };
    /**
     * Sets the shifts property value. The shifts in the schedule.
     * @param value Value to set for the shifts property.
     */
    public set shifts(value: Shift[] | undefined) {
        if(value) {
            const shiftsArrValue: ShiftImpl[] = [];
            this.shifts?.forEach(element => {
                shiftsArrValue.push((element instanceof ShiftImpl? element:new ShiftImpl(element)));
            });
            this._shifts = shiftsArrValue;
        }
    };
    /**
     * Gets the swapShiftsChangeRequests property value. The swapShiftsChangeRequests property
     * @returns a SwapShiftsChangeRequestInterface
     */
    public get swapShiftsChangeRequests() {
        return this._swapShiftsChangeRequests;
    };
    /**
     * Sets the swapShiftsChangeRequests property value. The swapShiftsChangeRequests property
     * @param value Value to set for the swapShiftsChangeRequests property.
     */
    public set swapShiftsChangeRequests(value: SwapShiftsChangeRequest[] | undefined) {
        if(value) {
            const swapShiftsChangeRequestsArrValue: SwapShiftsChangeRequestImpl[] = [];
            this.swapShiftsChangeRequests?.forEach(element => {
                swapShiftsChangeRequestsArrValue.push((element instanceof SwapShiftsChangeRequestImpl? element:new SwapShiftsChangeRequestImpl(element)));
            });
            this._swapShiftsChangeRequests = swapShiftsChangeRequestsArrValue;
        }
    };
    /**
     * Gets the swapShiftsRequestsEnabled property value. Indicates whether swap shifts requests are enabled for the schedule.
     * @returns a boolean
     */
    public get swapShiftsRequestsEnabled() {
        return this._swapShiftsRequestsEnabled;
    };
    /**
     * Sets the swapShiftsRequestsEnabled property value. Indicates whether swap shifts requests are enabled for the schedule.
     * @param value Value to set for the swapShiftsRequestsEnabled property.
     */
    public set swapShiftsRequestsEnabled(value: boolean | undefined) {
        if(value) {
            this._swapShiftsRequestsEnabled = value;
        }
    };
    /**
     * Gets the timeClockEnabled property value. Indicates whether time clock is enabled for the schedule.
     * @returns a boolean
     */
    public get timeClockEnabled() {
        return this._timeClockEnabled;
    };
    /**
     * Sets the timeClockEnabled property value. Indicates whether time clock is enabled for the schedule.
     * @param value Value to set for the timeClockEnabled property.
     */
    public set timeClockEnabled(value: boolean | undefined) {
        if(value) {
            this._timeClockEnabled = value;
        }
    };
    /**
     * Gets the timeOffReasons property value. The set of reasons for a time off in the schedule.
     * @returns a TimeOffReasonInterface
     */
    public get timeOffReasons() {
        return this._timeOffReasons;
    };
    /**
     * Sets the timeOffReasons property value. The set of reasons for a time off in the schedule.
     * @param value Value to set for the timeOffReasons property.
     */
    public set timeOffReasons(value: TimeOffReason[] | undefined) {
        if(value) {
            const timeOffReasonsArrValue: TimeOffReasonImpl[] = [];
            this.timeOffReasons?.forEach(element => {
                timeOffReasonsArrValue.push((element instanceof TimeOffReasonImpl? element:new TimeOffReasonImpl(element)));
            });
            this._timeOffReasons = timeOffReasonsArrValue;
        }
    };
    /**
     * Gets the timeOffRequests property value. The timeOffRequests property
     * @returns a TimeOffRequestInterface
     */
    public get timeOffRequests() {
        return this._timeOffRequests;
    };
    /**
     * Sets the timeOffRequests property value. The timeOffRequests property
     * @param value Value to set for the timeOffRequests property.
     */
    public set timeOffRequests(value: TimeOffRequest[] | undefined) {
        if(value) {
            const timeOffRequestsArrValue: TimeOffRequestImpl[] = [];
            this.timeOffRequests?.forEach(element => {
                timeOffRequestsArrValue.push((element instanceof TimeOffRequestImpl? element:new TimeOffRequestImpl(element)));
            });
            this._timeOffRequests = timeOffRequestsArrValue;
        }
    };
    /**
     * Gets the timeOffRequestsEnabled property value. Indicates whether time off requests are enabled for the schedule.
     * @returns a boolean
     */
    public get timeOffRequestsEnabled() {
        return this._timeOffRequestsEnabled;
    };
    /**
     * Sets the timeOffRequestsEnabled property value. Indicates whether time off requests are enabled for the schedule.
     * @param value Value to set for the timeOffRequestsEnabled property.
     */
    public set timeOffRequestsEnabled(value: boolean | undefined) {
        if(value) {
            this._timeOffRequestsEnabled = value;
        }
    };
    /**
     * Gets the timesOff property value. The instances of times off in the schedule.
     * @returns a TimeOffInterface
     */
    public get timesOff() {
        return this._timesOff;
    };
    /**
     * Sets the timesOff property value. The instances of times off in the schedule.
     * @param value Value to set for the timesOff property.
     */
    public set timesOff(value: TimeOff[] | undefined) {
        if(value) {
            const timesOffArrValue: TimeOffImpl[] = [];
            this.timesOff?.forEach(element => {
                timesOffArrValue.push((element instanceof TimeOffImpl? element:new TimeOffImpl(element)));
            });
            this._timesOff = timesOffArrValue;
        }
    };
    /**
     * Gets the timeZone property value. Indicates the time zone of the schedule team using tz database format. Required.
     * @returns a string
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Sets the timeZone property value. Indicates the time zone of the schedule team using tz database format. Required.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: string | undefined) {
        if(value) {
            this._timeZone = value;
        }
    };
    /**
     * Gets the workforceIntegrationIds property value. The workforceIntegrationIds property
     * @returns a string
     */
    public get workforceIntegrationIds() {
        return this._workforceIntegrationIds;
    };
    /**
     * Sets the workforceIntegrationIds property value. The workforceIntegrationIds property
     * @param value Value to set for the workforceIntegrationIds property.
     */
    public set workforceIntegrationIds(value: string[] | undefined) {
        if(value) {
            this._workforceIntegrationIds = value;
        }
    };
}
