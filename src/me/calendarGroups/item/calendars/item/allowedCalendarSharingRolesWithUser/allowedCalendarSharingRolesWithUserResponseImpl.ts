import {CalendarRoleType} from '../../../../../../models/calendarRoleType';
import {AllowedCalendarSharingRolesWithUserResponse} from './allowedCalendarSharingRolesWithUserResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the allowedCalendarSharingRoles method. */
export class AllowedCalendarSharingRolesWithUserResponseImpl implements AdditionalDataHolder, AllowedCalendarSharingRolesWithUserResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The value property */
    value?: CalendarRoleType[] | undefined;
    /**
     * Instantiates a new allowedCalendarSharingRolesWithUserResponse and sets the default values.
     * @param allowedCalendarSharingRolesWithUserResponseParameterValue 
     */
    public constructor(allowedCalendarSharingRolesWithUserResponseParameterValue?: AllowedCalendarSharingRolesWithUserResponse | undefined) {
        this.additionalData = {};
        this.additionalData = allowedCalendarSharingRolesWithUserResponseParameterValue?.additionalData ? {} : allowedCalendarSharingRolesWithUserResponseParameterValue?.additionalData!
        this.value = allowedCalendarSharingRolesWithUserResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getEnumValues<CalendarRoleType>(CalendarRoleType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value){
        if(this.value)
        this.value && writer.writeEnumValue<CalendarRoleType>("value", ...this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
