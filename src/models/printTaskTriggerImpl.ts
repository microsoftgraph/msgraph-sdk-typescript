import {createPrintTaskDefinitionFromDiscriminatorValue} from './createPrintTaskDefinitionFromDiscriminatorValue';
import {EntityImpl, PrintTaskDefinitionImpl} from './index';
import {PrintEvent} from './printEvent';
import {PrintTaskDefinition} from './printTaskDefinition';
import {PrintTaskTrigger} from './printTaskTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrintTaskTriggerImpl extends EntityImpl implements PrintTaskTrigger {
    /** The definition property */
    private _definition?: PrintTaskDefinition | undefined;
    /** The Universal Print event that will cause a new printTask to be triggered. Valid values are described in the following table. */
    private _event?: PrintEvent | undefined;
    /**
     * Instantiates a new printTaskTrigger and sets the default values.
     * @param printTaskTriggerParameterValue 
     */
    public constructor(printTaskTriggerParameterValue?: PrintTaskTrigger | undefined) {
        super(printTaskTriggerParameterValue);
        this._definition = printTaskTriggerParameterValue?.definition;
        this._event = printTaskTriggerParameterValue?.event;
    };
    /**
     * Gets the definition property value. The definition property
     * @returns a PrintTaskDefinitionInterface
     */
    public get definition() {
        return this._definition;
    };
    /**
     * Sets the definition property value. The definition property
     * @param value Value to set for the definition property.
     */
    public set definition(value: PrintTaskDefinition | undefined) {
        if(value) {
            this._definition = value instanceof PrintTaskDefinitionImpl? value : new PrintTaskDefinitionImpl(value);
        }
    };
    /**
     * Gets the event property value. The Universal Print event that will cause a new printTask to be triggered. Valid values are described in the following table.
     * @returns a printEvent
     */
    public get event() {
        return this._event;
    };
    /**
     * Sets the event property value. The Universal Print event that will cause a new printTask to be triggered. Valid values are described in the following table.
     * @param value Value to set for the event property.
     */
    public set event(value: PrintEvent | undefined) {
        if(value) {
            this._event = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "definition": n => { this.definition = n.getObjectValue<PrintTaskDefinitionImpl>(createPrintTaskDefinitionFromDiscriminatorValue); },
            "event": n => { this.event = n.getEnumValue<PrintEvent>(PrintEvent); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.definition){
            writer.writeObjectValue<PrintTaskDefinitionImpl>("definition", (!this.definition || this.definition instanceof PrintTaskDefinitionImpl? this.definition : new PrintTaskDefinitionImpl(this.definition)));
        }
        if(this.event){
            writer.writeEnumValue<PrintEvent>("event", this.event);
        }
    };
}
