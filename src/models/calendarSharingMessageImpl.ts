import {CalendarSharingMessage} from './calendarSharingMessage';
import {CalendarSharingMessageAction} from './calendarSharingMessageAction';
import {createCalendarSharingMessageActionFromDiscriminatorValue} from './createCalendarSharingMessageActionFromDiscriminatorValue';
import {CalendarSharingMessageActionImpl, MessageImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarSharingMessageImpl extends MessageImpl implements CalendarSharingMessage {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The canAccept property */
    public canAccept?: boolean | undefined;
    /** The sharingMessageAction property */
    public sharingMessageAction?: CalendarSharingMessageAction | undefined;
    /** The sharingMessageActions property */
    public sharingMessageActions?: CalendarSharingMessageAction[] | undefined;
    /** The suggestedCalendarName property */
    public suggestedCalendarName?: string | undefined;
    /**
     * Instantiates a new CalendarSharingMessage and sets the default values.
     * @param calendarSharingMessageParameterValue 
     */
    public constructor(calendarSharingMessageParameterValue?: CalendarSharingMessage | undefined) {
        super(calendarSharingMessageParameterValue);
        this.additionalData = calendarSharingMessageParameterValue?.additionalData ? calendarSharingMessageParameterValue?.additionalData! : {};
        this.canAccept = calendarSharingMessageParameterValue?.canAccept;
        this.sharingMessageAction = calendarSharingMessageParameterValue?.sharingMessageAction instanceof CalendarSharingMessageActionImpl? calendarSharingMessageParameterValue?.sharingMessageAction:new CalendarSharingMessageActionImpl(calendarSharingMessageParameterValue?.sharingMessageAction);
        const sharingMessageActionsArrValue: CalendarSharingMessageActionImpl[] = []; calendarSharingMessageParameterValue.sharingMessageActions?.forEach(element => {sharingMessageActionsArrValue.push(element instanceof CalendarSharingMessageActionImpl? element : new CalendarSharingMessageActionImpl(element));});
        this.sharingMessageActions = sharingMessageActionsArrValue;
        this.suggestedCalendarName = calendarSharingMessageParameterValue?.suggestedCalendarName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "canAccept": n => { this.canAccept = n.getBooleanValue(); },
            "sharingMessageAction": n => { this.sharingMessageAction = n.getObjectValue<CalendarSharingMessageActionImpl>(createCalendarSharingMessageActionFromDiscriminatorValue); },
            "sharingMessageActions": n => { this.sharingMessageActions = n.getCollectionOfObjectValues<CalendarSharingMessageActionImpl>(createCalendarSharingMessageActionFromDiscriminatorValue); },
            "suggestedCalendarName": n => { this.suggestedCalendarName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.canAccept){
            writer.writeBooleanValue("canAccept", this.canAccept);
        }
        if(this.sharingMessageAction){
            writer.writeObjectValue<CalendarSharingMessageActionImpl>("sharingMessageAction", new CalendarSharingMessageActionImpl(this.sharingMessageAction));
        }
        if(this.sharingMessageActions && this.sharingMessageActions.length != 0){        const sharingMessageActionsArrValue: CalendarSharingMessageActionImpl[] = []; this.sharingMessageActions?.forEach(element => {sharingMessageActionsArrValue.push(element instanceof CalendarSharingMessageActionImpl? element : new CalendarSharingMessageActionImpl(element));});
            writer.writeCollectionOfObjectValues<CalendarSharingMessageActionImpl>("sharingMessageActions", sharingMessageActionsArrValue);
        }
        if(this.suggestedCalendarName){
            writer.writeStringValue("suggestedCalendarName", this.suggestedCalendarName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
