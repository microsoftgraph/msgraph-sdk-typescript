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

/** Provides operations to manage the collection of application entities. */
export class CalendarImpl extends EntityImpl implements Calendar {
    /** Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness. */
    private _allowedOnlineMeetingProviders?: string[] | undefined;
    /** The permissions of the users with whom the calendar is shared. */
    private _calendarPermissions?: CalendarPermission[] | undefined;
    /** The calendar view for the calendar. Navigation property. Read-only. */
    private _calendarView?: Event[] | undefined;
    /** true if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access, through an Outlook client or the corresponding calendarPermission resource. Read-only. */
    private _canEdit?: boolean | undefined;
    /** true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it. Read-only. */
    private _canShare?: boolean | undefined;
    /** true if the user can read calendar items that have been marked private, false otherwise. This property is set through an Outlook client or the corresponding calendarPermission resource. Read-only. */
    private _canViewPrivateItems?: boolean | undefined;
    /** Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only. */
    private _changeKey?: string | undefined;
    /** Specifies the color theme to distinguish the calendar from other calendars in a UI. The property values are: auto, lightBlue, lightGreen, lightOrange, lightGray, lightYellow, lightTeal, lightPink, lightBrown, lightRed, maxColor. */
    private _color?: CalendarColor | undefined;
    /** The default online meeting provider for meetings sent from this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness. */
    private _defaultOnlineMeetingProvider?: OnlineMeetingProviderType | undefined;
    /** The events in the calendar. Navigation property. Read-only. */
    private _events?: Event[] | undefined;
    /** The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly set a color for the calendar, this property is  empty. */
    private _hexColor?: string | undefined;
    /** true if this is the default calendar where new events are created by default, false otherwise. */
    private _isDefaultCalendar?: boolean | undefined;
    /** Indicates whether this user calendar can be deleted from the user mailbox. */
    private _isRemovable?: boolean | undefined;
    /** Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users' primary calendars support tracking of meeting responses. */
    private _isTallyingResponses?: boolean | undefined;
    /** The collection of multi-value extended properties defined for the calendar. Read-only. Nullable. */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The calendar name. */
    private _name?: string | undefined;
    /** If set, this represents the user who created or added the calendar. For a calendar that the user created or added, the owner property is set to the user. For a calendar shared with the user, the owner property is set to the person who shared that calendar with the user. Read-only. */
    private _owner?: EmailAddress | undefined;
    /** The collection of single-value extended properties defined for the calendar. Read-only. Nullable. */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /**
     * Gets the allowedOnlineMeetingProviders property value. Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
     * @returns a string
     */
    public get allowedOnlineMeetingProviders() {
        return this._allowedOnlineMeetingProviders;
    };
    /**
     * Sets the allowedOnlineMeetingProviders property value. Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
     * @param value Value to set for the allowedOnlineMeetingProviders property.
     */
    public set allowedOnlineMeetingProviders(value: string[] | undefined) {
        if(value) {
            this._allowedOnlineMeetingProviders = value;
        }
    };
    /**
     * Gets the calendarPermissions property value. The permissions of the users with whom the calendar is shared.
     * @returns a CalendarPermissionInterface
     */
    public get calendarPermissions() {
        return this._calendarPermissions;
    };
    /**
     * Sets the calendarPermissions property value. The permissions of the users with whom the calendar is shared.
     * @param value Value to set for the calendarPermissions property.
     */
    public set calendarPermissions(value: CalendarPermission[] | undefined) {
        if(value) {
            const calendarPermissionsArrValue: CalendarPermissionImpl[] = [];
            this.calendarPermissions?.forEach(element => {
                calendarPermissionsArrValue.push((element instanceof CalendarPermissionImpl? element:new CalendarPermissionImpl(element)));
            });
            this._calendarPermissions = calendarPermissionsArrValue;
        }
    };
    /**
     * Gets the calendarView property value. The calendar view for the calendar. Navigation property. Read-only.
     * @returns a EventInterface
     */
    public get calendarView() {
        return this._calendarView;
    };
    /**
     * Sets the calendarView property value. The calendar view for the calendar. Navigation property. Read-only.
     * @param value Value to set for the calendarView property.
     */
    public set calendarView(value: Event[] | undefined) {
        if(value) {
            const calendarViewArrValue: EventImpl[] = [];
            this.calendarView?.forEach(element => {
                calendarViewArrValue.push((element instanceof EventImpl? element:new EventImpl(element)));
            });
            this._calendarView = calendarViewArrValue;
        }
    };
    /**
     * Gets the canEdit property value. true if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access, through an Outlook client or the corresponding calendarPermission resource. Read-only.
     * @returns a boolean
     */
    public get canEdit() {
        return this._canEdit;
    };
    /**
     * Sets the canEdit property value. true if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access, through an Outlook client or the corresponding calendarPermission resource. Read-only.
     * @param value Value to set for the canEdit property.
     */
    public set canEdit(value: boolean | undefined) {
        if(value) {
            this._canEdit = value;
        }
    };
    /**
     * Gets the canShare property value. true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it. Read-only.
     * @returns a boolean
     */
    public get canShare() {
        return this._canShare;
    };
    /**
     * Sets the canShare property value. true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it. Read-only.
     * @param value Value to set for the canShare property.
     */
    public set canShare(value: boolean | undefined) {
        if(value) {
            this._canShare = value;
        }
    };
    /**
     * Gets the canViewPrivateItems property value. true if the user can read calendar items that have been marked private, false otherwise. This property is set through an Outlook client or the corresponding calendarPermission resource. Read-only.
     * @returns a boolean
     */
    public get canViewPrivateItems() {
        return this._canViewPrivateItems;
    };
    /**
     * Sets the canViewPrivateItems property value. true if the user can read calendar items that have been marked private, false otherwise. This property is set through an Outlook client or the corresponding calendarPermission resource. Read-only.
     * @param value Value to set for the canViewPrivateItems property.
     */
    public set canViewPrivateItems(value: boolean | undefined) {
        if(value) {
            this._canViewPrivateItems = value;
        }
    };
    /**
     * Gets the changeKey property value. Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     * @returns a string
     */
    public get changeKey() {
        return this._changeKey;
    };
    /**
     * Sets the changeKey property value. Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     * @param value Value to set for the changeKey property.
     */
    public set changeKey(value: string | undefined) {
        if(value) {
            this._changeKey = value;
        }
    };
    /**
     * Gets the color property value. Specifies the color theme to distinguish the calendar from other calendars in a UI. The property values are: auto, lightBlue, lightGreen, lightOrange, lightGray, lightYellow, lightTeal, lightPink, lightBrown, lightRed, maxColor.
     * @returns a calendarColor
     */
    public get color() {
        return this._color;
    };
    /**
     * Sets the color property value. Specifies the color theme to distinguish the calendar from other calendars in a UI. The property values are: auto, lightBlue, lightGreen, lightOrange, lightGray, lightYellow, lightTeal, lightPink, lightBrown, lightRed, maxColor.
     * @param value Value to set for the color property.
     */
    public set color(value: CalendarColor | undefined) {
        if(value) {
            this._color = value;
        }
    };
    /**
     * Instantiates a new calendar and sets the default values.
     * @param calendarParameterValue 
     */
    public constructor(calendarParameterValue?: Calendar | undefined) {
        super(calendarParameterValue);
        this._allowedOnlineMeetingProviders = calendarParameterValue?.allowedOnlineMeetingProviders;
        this._calendarPermissions = calendarParameterValue?.calendarPermissions;
        this._calendarView = calendarParameterValue?.calendarView;
        this._canEdit = calendarParameterValue?.canEdit;
        this._canShare = calendarParameterValue?.canShare;
        this._canViewPrivateItems = calendarParameterValue?.canViewPrivateItems;
        this._changeKey = calendarParameterValue?.changeKey;
        this._color = calendarParameterValue?.color;
        this._defaultOnlineMeetingProvider = calendarParameterValue?.defaultOnlineMeetingProvider;
        this._events = calendarParameterValue?.events;
        this._hexColor = calendarParameterValue?.hexColor;
        this._isDefaultCalendar = calendarParameterValue?.isDefaultCalendar;
        this._isRemovable = calendarParameterValue?.isRemovable;
        this._isTallyingResponses = calendarParameterValue?.isTallyingResponses;
        this._multiValueExtendedProperties = calendarParameterValue?.multiValueExtendedProperties;
        this._name = calendarParameterValue?.name;
        this._owner = calendarParameterValue?.owner;
        this._singleValueExtendedProperties = calendarParameterValue?.singleValueExtendedProperties;
    };
    /**
     * Gets the defaultOnlineMeetingProvider property value. The default online meeting provider for meetings sent from this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
     * @returns a onlineMeetingProviderType
     */
    public get defaultOnlineMeetingProvider() {
        return this._defaultOnlineMeetingProvider;
    };
    /**
     * Sets the defaultOnlineMeetingProvider property value. The default online meeting provider for meetings sent from this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
     * @param value Value to set for the defaultOnlineMeetingProvider property.
     */
    public set defaultOnlineMeetingProvider(value: OnlineMeetingProviderType | undefined) {
        if(value) {
            this._defaultOnlineMeetingProvider = value;
        }
    };
    /**
     * Gets the events property value. The events in the calendar. Navigation property. Read-only.
     * @returns a EventInterface
     */
    public get events() {
        return this._events;
    };
    /**
     * Sets the events property value. The events in the calendar. Navigation property. Read-only.
     * @param value Value to set for the events property.
     */
    public set events(value: Event[] | undefined) {
        if(value) {
            const eventsArrValue: EventImpl[] = [];
            this.events?.forEach(element => {
                eventsArrValue.push((element instanceof EventImpl? element:new EventImpl(element)));
            });
            this._events = eventsArrValue;
        }
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
     * Gets the hexColor property value. The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly set a color for the calendar, this property is  empty.
     * @returns a string
     */
    public get hexColor() {
        return this._hexColor;
    };
    /**
     * Sets the hexColor property value. The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly set a color for the calendar, this property is  empty.
     * @param value Value to set for the hexColor property.
     */
    public set hexColor(value: string | undefined) {
        if(value) {
            this._hexColor = value;
        }
    };
    /**
     * Gets the isDefaultCalendar property value. true if this is the default calendar where new events are created by default, false otherwise.
     * @returns a boolean
     */
    public get isDefaultCalendar() {
        return this._isDefaultCalendar;
    };
    /**
     * Sets the isDefaultCalendar property value. true if this is the default calendar where new events are created by default, false otherwise.
     * @param value Value to set for the isDefaultCalendar property.
     */
    public set isDefaultCalendar(value: boolean | undefined) {
        if(value) {
            this._isDefaultCalendar = value;
        }
    };
    /**
     * Gets the isRemovable property value. Indicates whether this user calendar can be deleted from the user mailbox.
     * @returns a boolean
     */
    public get isRemovable() {
        return this._isRemovable;
    };
    /**
     * Sets the isRemovable property value. Indicates whether this user calendar can be deleted from the user mailbox.
     * @param value Value to set for the isRemovable property.
     */
    public set isRemovable(value: boolean | undefined) {
        if(value) {
            this._isRemovable = value;
        }
    };
    /**
     * Gets the isTallyingResponses property value. Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users' primary calendars support tracking of meeting responses.
     * @returns a boolean
     */
    public get isTallyingResponses() {
        return this._isTallyingResponses;
    };
    /**
     * Sets the isTallyingResponses property value. Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users' primary calendars support tracking of meeting responses.
     * @param value Value to set for the isTallyingResponses property.
     */
    public set isTallyingResponses(value: boolean | undefined) {
        if(value) {
            this._isTallyingResponses = value;
        }
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the calendar. Read-only. Nullable.
     * @returns a MultiValueLegacyExtendedPropertyInterface
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the calendar. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        if(value) {
            const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = [];
            this.multiValueExtendedProperties?.forEach(element => {
                multiValueExtendedPropertiesArrValue.push((element instanceof MultiValueLegacyExtendedPropertyImpl? element:new MultiValueLegacyExtendedPropertyImpl(element)));
            });
            this._multiValueExtendedProperties = multiValueExtendedPropertiesArrValue;
        }
    };
    /**
     * Gets the name property value. The calendar name.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The calendar name.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Gets the owner property value. If set, this represents the user who created or added the calendar. For a calendar that the user created or added, the owner property is set to the user. For a calendar shared with the user, the owner property is set to the person who shared that calendar with the user. Read-only.
     * @returns a EmailAddressInterface
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Sets the owner property value. If set, this represents the user who created or added the calendar. For a calendar that the user created or added, the owner property is set to the user. For a calendar shared with the user, the owner property is set to the person who shared that calendar with the user. Read-only.
     * @param value Value to set for the owner property.
     */
    public set owner(value: EmailAddress | undefined) {
        if(value) {
            this._owner = value instanceof EmailAddressImpl? value : new EmailAddressImpl(value);
        }
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
        if(this.calendarPermissions && this.calendarPermissions.length != 0){        const calendarPermissionsArrValue: CalendarPermissionImpl[] = [];
        this.calendarPermissions?.forEach(element => {
            calendarPermissionsArrValue.push((element instanceof CalendarPermissionImpl? element:new CalendarPermissionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<CalendarPermissionImpl>("calendarPermissions", calendarPermissionsArrValue);
        }
        if(this.calendarView && this.calendarView.length != 0){        const calendarViewArrValue: EventImpl[] = [];
        this.calendarView?.forEach(element => {
            calendarViewArrValue.push((element instanceof EventImpl? element:new EventImpl(element)));
        });
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
        if(this.events && this.events.length != 0){        const eventsArrValue: EventImpl[] = [];
        this.events?.forEach(element => {
            eventsArrValue.push((element instanceof EventImpl? element:new EventImpl(element)));
        });
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
        if(this.multiValueExtendedProperties && this.multiValueExtendedProperties.length != 0){        const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = [];
        this.multiValueExtendedProperties?.forEach(element => {
            multiValueExtendedPropertiesArrValue.push((element instanceof MultiValueLegacyExtendedPropertyImpl? element:new MultiValueLegacyExtendedPropertyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>("multiValueExtendedProperties", multiValueExtendedPropertiesArrValue);
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.owner){
            writer.writeObjectValue<EmailAddressImpl>("owner", (!this.owner || this.owner instanceof EmailAddressImpl? this.owner : new EmailAddressImpl(this.owner)));
        }
        if(this.singleValueExtendedProperties && this.singleValueExtendedProperties.length != 0){        const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = [];
        this.singleValueExtendedProperties?.forEach(element => {
            singleValueExtendedPropertiesArrValue.push((element instanceof SingleValueLegacyExtendedPropertyImpl? element:new SingleValueLegacyExtendedPropertyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>("singleValueExtendedProperties", singleValueExtendedPropertiesArrValue);
        }
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the calendar. Read-only. Nullable.
     * @returns a SingleValueLegacyExtendedPropertyInterface
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the calendar. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        if(value) {
            const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = [];
            this.singleValueExtendedProperties?.forEach(element => {
                singleValueExtendedPropertiesArrValue.push((element instanceof SingleValueLegacyExtendedPropertyImpl? element:new SingleValueLegacyExtendedPropertyImpl(element)));
            });
            this._singleValueExtendedProperties = singleValueExtendedPropertiesArrValue;
        }
    };
}
