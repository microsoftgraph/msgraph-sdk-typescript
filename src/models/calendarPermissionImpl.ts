import {CalendarPermission} from './calendarPermission';
import {CalendarRoleType} from './calendarRoleType';
import {createEmailAddressFromDiscriminatorValue} from './createEmailAddressFromDiscriminatorValue';
import {EmailAddress} from './emailAddress';
import {EmailAddressImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarPermissionImpl extends EntityImpl implements CalendarPermission, Parsable {
    /** List of allowed sharing or delegating permission levels for the calendar. Possible values are: none, freeBusyRead, limitedRead, read, write, delegateWithoutPrivateEventAccess, delegateWithPrivateEventAccess, custom. */
    allowedRoles?: CalendarRoleType[] | undefined;
    /** Represents a sharee or delegate who has access to the calendar. For the 'My Organization' sharee, the address property is null. Read-only. */
    emailAddress?: EmailAddress | undefined;
    /** True if the user in context (sharee or delegate) is inside the same organization as the calendar owner. */
    isInsideOrganization?: boolean | undefined;
    /** True if the user can be removed from the list of sharees or delegates for the specified calendar, false otherwise. The 'My organization' user determines the permissions other people within your organization have to the given calendar. You cannot remove 'My organization' as a sharee to a calendar. */
    isRemovable?: boolean | undefined;
    /** Current permission level of the calendar sharee or delegate. */
    role?: CalendarRoleType | undefined;
    /**
     * Instantiates a new calendarPermission and sets the default values.
     * @param calendarPermissionParameterValue 
     */
    public constructor(calendarPermissionParameterValue?: CalendarPermission | undefined) {
        super();
        this.allowedRoles = calendarPermissionParameterValue?.allowedRoles ;
        this.emailAddress = calendarPermissionParameterValue?.emailAddress ;
        this.isInsideOrganization = calendarPermissionParameterValue?.isInsideOrganization ;
        this.isRemovable = calendarPermissionParameterValue?.isRemovable ;
        this.role = calendarPermissionParameterValue?.role ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedRoles": n => { this.allowedRoles = n.getEnumValues<CalendarRoleType>(CalendarRoleType); },
            "emailAddress": n => { this.emailAddress = n.getObjectValue<EmailAddressImpl>(createEmailAddressFromDiscriminatorValue); },
            "isInsideOrganization": n => { this.isInsideOrganization = n.getBooleanValue(); },
            "isRemovable": n => { this.isRemovable = n.getBooleanValue(); },
            "role": n => { this.role = n.getEnumValue<CalendarRoleType>(CalendarRoleType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allowedRoles){
        if(this.allowedRoles)
        this.allowedRoles && writer.writeEnumValue<CalendarRoleType>("allowedRoles", ...this.allowedRoles);
        }
        if(this.emailAddress){
        if(this.emailAddress)
        writer.writeObjectValue<EmailAddressImpl>("emailAddress", new EmailAddressImpl(this.emailAddress));
        }
        if(this.isInsideOrganization){
        if(this.isInsideOrganization)
        writer.writeBooleanValue("isInsideOrganization", this.isInsideOrganization);
        }
        if(this.isRemovable){
        if(this.isRemovable)
        writer.writeBooleanValue("isRemovable", this.isRemovable);
        }
        if(this.role){
        if(this.role)
        writer.writeEnumValue<CalendarRoleType>("role", this.role);
        }
    };
}
