import {CalendarSharingAction} from './calendarSharingAction';
import {CalendarSharingActionImportance} from './calendarSharingActionImportance';
import {CalendarSharingActionType} from './calendarSharingActionType';
import {AdminMember1} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarSharingMessageAction implements AdditionalDataHolder, Parsable {
    /** The action property */
    private _action?: CalendarSharingAction | AdminMember1 | undefined;
    /** The actionType property */
    private _actionType?: CalendarSharingActionType | AdminMember1 | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The importance property */
    private _importance?: CalendarSharingActionImportance | AdminMember1 | undefined;
    /**
     * Gets the action property value. The action property
     * @returns a admin
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. The action property
     * @param value Value to set for the action property.
     */
    public set action(value: CalendarSharingAction | AdminMember1 | undefined) {
        this._action = value;
    };
    /**
     * Gets the actionType property value. The actionType property
     * @returns a admin
     */
    public get actionType() {
        return this._actionType;
    };
    /**
     * Sets the actionType property value. The actionType property
     * @param value Value to set for the actionType property.
     */
    public set actionType(value: CalendarSharingActionType | AdminMember1 | undefined) {
        this._actionType = value;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new calendarSharingMessageAction and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "action": n => { this.action = n.getObjectValue<CalendarSharingAction>(createCalendarSharingActionFromDiscriminatorValue); },
            "actionType": n => { this.actionType = n.getObjectValue<CalendarSharingActionType>(createCalendarSharingActionTypeFromDiscriminatorValue); },
            "importance": n => { this.importance = n.getObjectValue<CalendarSharingActionImportance>(createCalendarSharingActionImportanceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the importance property value. The importance property
     * @returns a admin
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Sets the importance property value. The importance property
     * @param value Value to set for the importance property.
     */
    public set importance(value: CalendarSharingActionImportance | AdminMember1 | undefined) {
        this._importance = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<CalendarSharingAction>("action", this.action);
        writer.writeObjectValue<CalendarSharingActionType>("actionType", this.actionType);
        writer.writeObjectValue<CalendarSharingActionImportance>("importance", this.importance);
        writer.writeAdditionalData(this.additionalData);
    };
}
