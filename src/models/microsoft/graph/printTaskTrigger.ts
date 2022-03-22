import {createPrintTaskDefinitionFromDiscriminatorValue} from './createPrintTaskDefinitionFromDiscriminatorValue';
import {Entity, PrintTaskDefinition} from './index';
import {PrintEvent} from './printEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintTaskTrigger extends Entity implements Parsable {
    private _definition?: PrintTaskDefinition | undefined;
    /** The Universal Print event that will cause a new printTask to be triggered. Valid values are described in the following table.  */
    private _event?: PrintEvent | undefined;
    /**
     * Instantiates a new printTaskTrigger and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the definition property value. 
     * @returns a printTaskDefinition
     */
    public get definition() {
        return this._definition;
    };
    /**
     * Sets the definition property value. 
     * @param value Value to set for the definition property.
     */
    public set definition(value: PrintTaskDefinition | undefined) {
        this._definition = value;
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
        this._event = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "definition": (o, n) => { (o as unknown as PrintTaskTrigger).definition = n.getObjectValue<PrintTaskDefinition>(createPrintTaskDefinitionFromDiscriminatorValue); },
            "event": (o, n) => { (o as unknown as PrintTaskTrigger).event = n.getEnumValue<PrintEvent>(PrintEvent); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PrintTaskDefinition>("definition", this.definition);
        writer.writeEnumValue<PrintEvent>("event", this.event);
    };
}
