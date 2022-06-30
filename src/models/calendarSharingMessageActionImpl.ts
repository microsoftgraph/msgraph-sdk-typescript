import {CalendarSharingAction} from './calendarSharingAction';
import {CalendarSharingActionImportance} from './calendarSharingActionImportance';
import {CalendarSharingActionType} from './calendarSharingActionType';
import {CalendarSharingMessageAction} from './calendarSharingMessageAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarSharingMessageActionImpl implements CalendarSharingMessageAction {
    /** The action property */
    private _action?: CalendarSharingAction | undefined;
    /** The actionType property */
    private _actionType?: CalendarSharingActionType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The importance property */
    private _importance?: CalendarSharingActionImportance | undefined;
    /**
     * Gets the action property value. The action property
     * @returns a calendarSharingAction
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. The action property
     * @param value Value to set for the action property.
     */
    public set action(value: CalendarSharingAction | undefined) {
        if(value) {
            this._action = value;
        }
    };
    /**
     * Gets the actionType property value. The actionType property
     * @returns a calendarSharingActionType
     */
    public get actionType() {
        return this._actionType;
    };
    /**
     * Sets the actionType property value. The actionType property
     * @param value Value to set for the actionType property.
     */
    public set actionType(value: CalendarSharingActionType | undefined) {
        if(value) {
            this._actionType = value;
        }
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new calendarSharingMessageAction and sets the default values.
     * @param calendarSharingMessageActionParameterValue 
     */
    public constructor(calendarSharingMessageActionParameterValue?: CalendarSharingMessageAction | undefined) {
        this._action = calendarSharingMessageActionParameterValue?.action;
        this._actionType = calendarSharingMessageActionParameterValue?.actionType;
        this._additionalData = calendarSharingMessageActionParameterValue?.additionalData ? calendarSharingMessageActionParameterValue?.additionalData! : {};
        this._importance = calendarSharingMessageActionParameterValue?.importance;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "action": n => { this.action = n.getEnumValue<CalendarSharingAction>(CalendarSharingAction); },
            "actionType": n => { this.actionType = n.getEnumValue<CalendarSharingActionType>(CalendarSharingActionType); },
            "importance": n => { this.importance = n.getEnumValue<CalendarSharingActionImportance>(CalendarSharingActionImportance); },
        };
    };
    /**
     * Gets the importance property value. The importance property
     * @returns a calendarSharingActionImportance
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Sets the importance property value. The importance property
     * @param value Value to set for the importance property.
     */
    public set importance(value: CalendarSharingActionImportance | undefined) {
        if(value) {
            this._importance = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.action){
            writer.writeEnumValue<CalendarSharingAction>("action", this.action);
        }
        if(this.actionType){
            writer.writeEnumValue<CalendarSharingActionType>("actionType", this.actionType);
        }
        if(this.importance){
            writer.writeEnumValue<CalendarSharingActionImportance>("importance", this.importance);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
