import {CalendarSharingAction} from './calendarSharingAction';
import {CalendarSharingActionImportance} from './calendarSharingActionImportance';
import {CalendarSharingActionType} from './calendarSharingActionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarSharingMessageAction implements AdditionalDataHolder, Parsable {
    private _action?: CalendarSharingAction | undefined;
    private _actionType?: CalendarSharingActionType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _importance?: CalendarSharingActionImportance | undefined;
    private _odataType?: string | undefined;
    /**
     * Gets the action property value. 
     * @returns a calendarSharingAction
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. 
     * @param value Value to set for the action property.
     */
    public set action(value: CalendarSharingAction | undefined) {
        this._action = value;
    };
    /**
     * Gets the actionType property value. 
     * @returns a calendarSharingActionType
     */
    public get actionType() {
        return this._actionType;
    };
    /**
     * Sets the actionType property value. 
     * @param value Value to set for the actionType property.
     */
    public set actionType(value: CalendarSharingActionType | undefined) {
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
            "action": n => { this.action = n.getEnumValue<CalendarSharingAction>(CalendarSharingAction); },
            "actionType": n => { this.actionType = n.getEnumValue<CalendarSharingActionType>(CalendarSharingActionType); },
            "importance": n => { this.importance = n.getEnumValue<CalendarSharingActionImportance>(CalendarSharingActionImportance); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the importance property value. 
     * @returns a calendarSharingActionImportance
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Sets the importance property value. 
     * @param value Value to set for the importance property.
     */
    public set importance(value: CalendarSharingActionImportance | undefined) {
        this._importance = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<CalendarSharingAction>("action", this.action);
        writer.writeEnumValue<CalendarSharingActionType>("actionType", this.actionType);
        writer.writeEnumValue<CalendarSharingActionImportance>("importance", this.importance);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
