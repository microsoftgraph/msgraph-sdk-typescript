import {CalendarSharingAction} from './calendarSharingAction';
import {CalendarSharingActionImportance} from './calendarSharingActionImportance';
import {CalendarSharingActionType} from './calendarSharingActionType';
import {CalendarSharingMessageAction} from './calendarSharingMessageAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarSharingMessageActionImpl implements CalendarSharingMessageAction {
    /** The action property */
    public action?: CalendarSharingAction | undefined;
    /** The actionType property */
    public actionType?: CalendarSharingActionType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The importance property */
    public importance?: CalendarSharingActionImportance | undefined;
    /**
     * Instantiates a new calendarSharingMessageAction and sets the default values.
     * @param calendarSharingMessageActionParameterValue 
     */
    public constructor(calendarSharingMessageActionParameterValue?: CalendarSharingMessageAction | undefined) {
        this.action = calendarSharingMessageActionParameterValue?.action;
        this.actionType = calendarSharingMessageActionParameterValue?.actionType;
        this.additionalData = calendarSharingMessageActionParameterValue?.additionalData ? calendarSharingMessageActionParameterValue?.additionalData! : {};
        this.importance = calendarSharingMessageActionParameterValue?.importance;
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
