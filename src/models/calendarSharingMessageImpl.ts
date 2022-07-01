import {CalendarSharingMessage} from './calendarSharingMessage';
import {CalendarSharingMessageAction} from './calendarSharingMessageAction';
import {createCalendarSharingMessageActionFromDiscriminatorValue} from './createCalendarSharingMessageActionFromDiscriminatorValue';
import {CalendarSharingMessageActionImpl, MessageImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarSharingMessageImpl extends MessageImpl implements CalendarSharingMessage {
    /** The canAccept property */
    private _canAccept?: boolean | undefined;
    /** The sharingMessageAction property */
    private _sharingMessageAction?: CalendarSharingMessageAction | undefined;
    /** The sharingMessageActions property */
    private _sharingMessageActions?: CalendarSharingMessageAction[] | undefined;
    /** The suggestedCalendarName property */
    private _suggestedCalendarName?: string | undefined;
    /**
     * Gets the canAccept property value. The canAccept property
     * @returns a boolean
     */
    public get canAccept() {
        return this._canAccept;
    };
    /**
     * Sets the canAccept property value. The canAccept property
     * @param value Value to set for the canAccept property.
     */
    public set canAccept(value: boolean | undefined) {
        if(value) {
            this._canAccept = value;
        }
    };
    /**
     * Instantiates a new CalendarSharingMessage and sets the default values.
     * @param calendarSharingMessageParameterValue 
     */
    public constructor(calendarSharingMessageParameterValue?: CalendarSharingMessage | undefined) {
        super(calendarSharingMessageParameterValue);
        this._canAccept = calendarSharingMessageParameterValue?.canAccept;
        this._sharingMessageAction = calendarSharingMessageParameterValue?.sharingMessageAction;
        this._sharingMessageActions = calendarSharingMessageParameterValue?.sharingMessageActions;
        this._suggestedCalendarName = calendarSharingMessageParameterValue?.suggestedCalendarName;
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
            writer.writeObjectValue<CalendarSharingMessageActionImpl>("sharingMessageAction", (this.sharingMessageAction instanceof CalendarSharingMessageActionImpl? this.sharingMessageAction as CalendarSharingMessageActionImpl: new CalendarSharingMessageActionImpl(this.sharingMessageAction)));
        }
        if(this.sharingMessageActions && this.sharingMessageActions.length != 0){        const sharingMessageActionsArrValue: CalendarSharingMessageActionImpl[] = [];
        this.sharingMessageActions?.forEach(element => {
            sharingMessageActionsArrValue.push((element instanceof CalendarSharingMessageActionImpl? element as CalendarSharingMessageActionImpl:new CalendarSharingMessageActionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<CalendarSharingMessageActionImpl>("sharingMessageActions", sharingMessageActionsArrValue);
        }
        if(this.suggestedCalendarName){
            writer.writeStringValue("suggestedCalendarName", this.suggestedCalendarName);
        }
    };
    /**
     * Gets the sharingMessageAction property value. The sharingMessageAction property
     * @returns a CalendarSharingMessageActionInterface
     */
    public get sharingMessageAction() {
        return this._sharingMessageAction;
    };
    /**
     * Sets the sharingMessageAction property value. The sharingMessageAction property
     * @param value Value to set for the sharingMessageAction property.
     */
    public set sharingMessageAction(value: CalendarSharingMessageAction | undefined) {
        if(value) {
            this._sharingMessageAction = value instanceof CalendarSharingMessageActionImpl? value as CalendarSharingMessageActionImpl: new CalendarSharingMessageActionImpl(value);
        }
    };
    /**
     * Gets the sharingMessageActions property value. The sharingMessageActions property
     * @returns a CalendarSharingMessageActionInterface
     */
    public get sharingMessageActions() {
        return this._sharingMessageActions;
    };
    /**
     * Sets the sharingMessageActions property value. The sharingMessageActions property
     * @param value Value to set for the sharingMessageActions property.
     */
    public set sharingMessageActions(value: CalendarSharingMessageAction[] | undefined) {
        if(value) {
            const sharingMessageActionsArrValue: CalendarSharingMessageActionImpl[] = [];
            this.sharingMessageActions?.forEach(element => {
                sharingMessageActionsArrValue.push((element instanceof CalendarSharingMessageActionImpl? element as CalendarSharingMessageActionImpl:new CalendarSharingMessageActionImpl(element)));
            });
            this._sharingMessageActions = sharingMessageActionsArrValue;
        }
    };
    /**
     * Gets the suggestedCalendarName property value. The suggestedCalendarName property
     * @returns a string
     */
    public get suggestedCalendarName() {
        return this._suggestedCalendarName;
    };
    /**
     * Sets the suggestedCalendarName property value. The suggestedCalendarName property
     * @param value Value to set for the suggestedCalendarName property.
     */
    public set suggestedCalendarName(value: string | undefined) {
        if(value) {
            this._suggestedCalendarName = value;
        }
    };
}
