import {Calendar} from './calendar';
import {CalendarColor} from './calendarColor';
import {CalendarPermission} from './calendarPermission';
import {createCalendarPermissionFromDiscriminatorValue} from './createCalendarPermissionFromDiscriminatorValue';
import {createEmailAddressFromDiscriminatorValue} from './createEmailAddressFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {EmailAddress} from './emailAddress';
import {Event} from './event';
import {CalendarPermissionImpl, EmailAddressImpl, EntityImpl, EventImpl, MultiValueLegacyExtendedPropertyImpl, SingleValueLegacyExtendedPropertyImpl} from './index';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {OnlineMeetingProviderType} from './onlineMeetingProviderType';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class CalendarImpl extends EntityImpl implements Calendar, Parsable {
    /** Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness. */
    public allowedOnlineMeetingProviders?: string[] | undefined;
    /** The permissions of the users with whom the calendar is shared. */
    public calendarPermissions?: CalendarPermission[] | undefined;
    /** The calendar view for the calendar. Navigation property. Read-only. */
    public calendarView?: Event[] | undefined;
    /** true if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access, through an Outlook client or the corresponding calendarPermission resource. Read-only. */
    public canEdit?: boolean | undefined;
    /** true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it. Read-only. */
    public canShare?: boolean | undefined;
    /** true if the user can read calendar items that have been marked private, false otherwise. This property is set through an Outlook client or the corresponding calendarPermission resource. Read-only. */
    public canViewPrivateItems?: boolean | undefined;
    /** Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only. */
    public changeKey?: string | undefined;
    /** Specifies the color theme to distinguish the calendar from other calendars in a UI. The property values are: auto, lightBlue, lightGreen, lightOrange, lightGray, lightYellow, lightTeal, lightPink, lightBrown, lightRed, maxColor. */
    public color?: CalendarColor | undefined;
    /** The default online meeting provider for meetings sent from this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness. */
    public defaultOnlineMeetingProvider?: OnlineMeetingProviderType | undefined;
    /** The events in the calendar. Navigation property. Read-only. */
    public events?: Event[] | undefined;
    /** The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly set a color for the calendar, this property is  empty. */
    public hexColor?: string | undefined;
    /** true if this is the default calendar where new events are created by default, false otherwise. */
    public isDefaultCalendar?: boolean | undefined;
    /** Indicates whether this user calendar can be deleted from the user mailbox. */
    public isRemovable?: boolean | undefined;
    /** Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users' primary calendars support tracking of meeting responses. */
    public isTallyingResponses?: boolean | undefined;
    /** The collection of multi-value extended properties defined for the calendar. Read-only. Nullable. */
    public multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The calendar name. */
    public name?: string | undefined;
    /** If set, this represents the user who created or added the calendar. For a calendar that the user created or added, the owner property is set to the user. For a calendar shared with the user, the owner property is set to the person who shared that calendar with the user. Read-only. */
    public owner?: EmailAddress | undefined;
    /** The collection of single-value extended properties defined for the calendar. Read-only. Nullable. */
    public singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /**
     * Instantiates a new calendar and sets the default values.
     * @param calendarParameterValue 
     */
    public constructor(calendarParameterValue?: Calendar | undefined) {
        super();
        this.allowedOnlineMeetingProviders = calendarParameterValue?.allowedOnlineMeetingProviders ;
        this.calendarPermissions = calendarParameterValue?.calendarPermissions ;
        this.calendarView = calendarParameterValue?.calendarView ;
        this.canEdit = calendarParameterValue?.canEdit ;
        this.canShare = calendarParameterValue?.canShare ;
        this.canViewPrivateItems = calendarParameterValue?.canViewPrivateItems ;
        this.changeKey = calendarParameterValue?.changeKey ;
        this.color = calendarParameterValue?.color ;
        this.defaultOnlineMeetingProvider = calendarParameterValue?.defaultOnlineMeetingProvider ;
        this.events = calendarParameterValue?.events ;
        this.hexColor = calendarParameterValue?.hexColor ;
        this.isDefaultCalendar = calendarParameterValue?.isDefaultCalendar ;
        this.isRemovable = calendarParameterValue?.isRemovable ;
        this.isTallyingResponses = calendarParameterValue?.isTallyingResponses ;
        this.multiValueExtendedProperties = calendarParameterValue?.multiValueExtendedProperties ;
        this.name = calendarParameterValue?.name ;
        this.owner = calendarParameterValue?.owner ;
        this.singleValueExtendedProperties = calendarParameterValue?.singleValueExtendedProperties ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedOnlineMeetingProviders": n => { this.allowedOnlineMeetingProviders = n.getCollectionOfPrimitiveValues<string>(); },
            "calendarPermissions": n => { this.calendarPermissions = n.getCollectionOfObjectValues<CalendarPermissionImpl>(createCalendarPermissionFromDiscriminatorValue); },
            "calendarView": n => { this.calendarView = n.getCollectionOfObjectValues<EventImpl>(createEventFromDiscriminatorValue); },
            "canEdit": n => { this.canEdit = n.getBooleanValue(); },
            "canShare": n => { this.canShare = n.getBooleanValue(); },
            "canViewPrivateItems": n => { this.canViewPrivateItems = n.getBooleanValue(); },
            "changeKey": n => { this.changeKey = n.getStringValue(); },
            "color": n => { this.color = n.getEnumValue<CalendarColor>(CalendarColor); },
            "defaultOnlineMeetingProvider": n => { this.defaultOnlineMeetingProvider = n.getEnumValue<OnlineMeetingProviderType>(OnlineMeetingProviderType); },
            "events": n => { this.events = n.getCollectionOfObjectValues<EventImpl>(createEventFromDiscriminatorValue); },
            "hexColor": n => { this.hexColor = n.getStringValue(); },
            "isDefaultCalendar": n => { this.isDefaultCalendar = n.getBooleanValue(); },
            "isRemovable": n => { this.isRemovable = n.getBooleanValue(); },
            "isTallyingResponses": n => { this.isTallyingResponses = n.getBooleanValue(); },
            "multiValueExtendedProperties": n => { this.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "owner": n => { this.owner = n.getObjectValue<EmailAddressImpl>(createEmailAddressFromDiscriminatorValue); },
            "singleValueExtendedProperties": n => { this.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allowedOnlineMeetingProviders){
        writer.writeCollectionOfPrimitiveValues<string>("allowedOnlineMeetingProviders", this.allowedOnlineMeetingProviders);
        }
        if(this.calendarPermissions && this.calendarPermissions.length != 0){        const calendarPermissionsArrValue: CalendarPermissionImpl[] = []; this.calendarPermissions?.forEach(element => {calendarPermissionsArrValue.push(new CalendarPermissionImpl(element));});
        writer.writeCollectionOfObjectValues<CalendarPermissionImpl>("calendarPermissions", calendarPermissionsArrValue);
        }
        if(this.calendarView && this.calendarView.length != 0){        const calendarViewArrValue: EventImpl[] = []; this.calendarView?.forEach(element => {calendarViewArrValue.push(new EventImpl(element));});
        writer.writeCollectionOfObjectValues<EventImpl>("calendarView", calendarViewArrValue);
        }
        if(this.canEdit){
        writer.writeBooleanValue("canEdit", this.canEdit);
        }
        if(this.canShare){
        writer.writeBooleanValue("canShare", this.canShare);
        }
        if(this.canViewPrivateItems){
        writer.writeBooleanValue("canViewPrivateItems", this.canViewPrivateItems);
        }
        if(this.changeKey){
        writer.writeStringValue("changeKey", this.changeKey);
        }
        if(this.color){
        writer.writeEnumValue<CalendarColor>("color", this.color);
        }
        if(this.defaultOnlineMeetingProvider){
        writer.writeEnumValue<OnlineMeetingProviderType>("defaultOnlineMeetingProvider", this.defaultOnlineMeetingProvider);
        }
        if(this.events && this.events.length != 0){        const eventsArrValue: EventImpl[] = []; this.events?.forEach(element => {eventsArrValue.push(new EventImpl(element));});
        writer.writeCollectionOfObjectValues<EventImpl>("events", eventsArrValue);
        }
        if(this.hexColor){
        writer.writeStringValue("hexColor", this.hexColor);
        }
        if(this.isDefaultCalendar){
        writer.writeBooleanValue("isDefaultCalendar", this.isDefaultCalendar);
        }
        if(this.isRemovable){
        writer.writeBooleanValue("isRemovable", this.isRemovable);
        }
        if(this.isTallyingResponses){
        writer.writeBooleanValue("isTallyingResponses", this.isTallyingResponses);
        }
        if(this.multiValueExtendedProperties && this.multiValueExtendedProperties.length != 0){        const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = []; this.multiValueExtendedProperties?.forEach(element => {multiValueExtendedPropertiesArrValue.push(new MultiValueLegacyExtendedPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>("multiValueExtendedProperties", multiValueExtendedPropertiesArrValue);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.owner){
        writer.writeObjectValue<EmailAddressImpl>("owner", new EmailAddressImpl(this.owner));
        }
        if(this.singleValueExtendedProperties && this.singleValueExtendedProperties.length != 0){        const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = []; this.singleValueExtendedProperties?.forEach(element => {singleValueExtendedPropertiesArrValue.push(new SingleValueLegacyExtendedPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>("singleValueExtendedProperties", singleValueExtendedPropertiesArrValue);
        }
    };
}
