import {ActionState} from './actionState';
import {DeviceActionResult} from './deviceActionResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device action result */
export class DeviceActionResultImpl implements AdditionalDataHolder, DeviceActionResult, Parsable {
    /** Action name */
    public actionName?: string | undefined;
    /** State of the action. Possible values are: none, pending, canceled, active, done, failed, notSupported. */
    public actionState?: ActionState | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Time the action state was last updated */
    public lastUpdatedDateTime?: Date | undefined;
    /** Time the action was initiated */
    public startDateTime?: Date | undefined;
    /**
     * Instantiates a new deviceActionResult and sets the default values.
     * @param deviceActionResultParameterValue 
     */
    public constructor(deviceActionResultParameterValue?: DeviceActionResult | undefined) {
        this.actionName = deviceActionResultParameterValue?.actionName ;
        this.actionState = deviceActionResultParameterValue?.actionState ;
        this.additionalData = deviceActionResultParameterValue?.additionalData ? deviceActionResultParameterValue?.additionalData! : {}
        this.lastUpdatedDateTime = deviceActionResultParameterValue?.lastUpdatedDateTime ;
        this.startDateTime = deviceActionResultParameterValue?.startDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "actionName": n => { this.actionName = n.getStringValue(); },
            "actionState": n => { this.actionState = n.getEnumValue<ActionState>(ActionState); },
            "lastUpdatedDateTime": n => { this.lastUpdatedDateTime = n.getDateValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.actionName){
        writer.writeStringValue("actionName", this.actionName);
        }
        if(this.actionState){
        writer.writeEnumValue<ActionState>("actionState", this.actionState);
        }
        if(this.lastUpdatedDateTime){
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
