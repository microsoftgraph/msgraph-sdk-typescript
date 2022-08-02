import {createCalendarSharingMessageActionFromDiscriminatorValue} from './createCalendarSharingMessageActionFromDiscriminatorValue';
import {CalendarSharingMessageAction, Message} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarSharingMessage extends Message implements Parsable {
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
        this._canAccept = value;
    };
    /**
     * Instantiates a new CalendarSharingMessage and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.calendarSharingMessage";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "canAccept": n => { this.canAccept = n.getBooleanValue(); },
            "sharingMessageAction": n => { this.sharingMessageAction = n.getObjectValue<CalendarSharingMessageAction>(createCalendarSharingMessageActionFromDiscriminatorValue); },
            "sharingMessageActions": n => { this.sharingMessageActions = n.getCollectionOfObjectValues<CalendarSharingMessageAction>(createCalendarSharingMessageActionFromDiscriminatorValue); },
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
        writer.writeBooleanValue("canAccept", this.canAccept);
        writer.writeObjectValue<CalendarSharingMessageAction>("sharingMessageAction", this.sharingMessageAction);
        writer.writeCollectionOfObjectValues<CalendarSharingMessageAction>("sharingMessageActions", this.sharingMessageActions);
        writer.writeStringValue("suggestedCalendarName", this.suggestedCalendarName);
    };
    /**
     * Gets the sharingMessageAction property value. The sharingMessageAction property
     * @returns a calendarSharingMessageAction
     */
    public get sharingMessageAction() {
        return this._sharingMessageAction;
    };
    /**
     * Sets the sharingMessageAction property value. The sharingMessageAction property
     * @param value Value to set for the sharingMessageAction property.
     */
    public set sharingMessageAction(value: CalendarSharingMessageAction | undefined) {
        this._sharingMessageAction = value;
    };
    /**
     * Gets the sharingMessageActions property value. The sharingMessageActions property
     * @returns a calendarSharingMessageAction
     */
    public get sharingMessageActions() {
        return this._sharingMessageActions;
    };
    /**
     * Sets the sharingMessageActions property value. The sharingMessageActions property
     * @param value Value to set for the sharingMessageActions property.
     */
    public set sharingMessageActions(value: CalendarSharingMessageAction[] | undefined) {
        this._sharingMessageActions = value;
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
        this._suggestedCalendarName = value;
    };
}
