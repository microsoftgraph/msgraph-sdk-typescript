import {createPrintTaskDefinitionFromDiscriminatorValue} from './createPrintTaskDefinitionFromDiscriminatorValue';
import {EntityImpl, PrintTaskDefinitionImpl} from './index';
import {PrintEvent} from './printEvent';
import {PrintTaskDefinition} from './printTaskDefinition';
import {PrintTaskTrigger} from './printTaskTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrintTaskTriggerImpl extends EntityImpl implements Parsable, PrintTaskTrigger {
    /** The definition property */
    public definition?: PrintTaskDefinition | undefined;
    /** The Universal Print event that will cause a new printTask to be triggered. Valid values are described in the following table. */
    public event?: PrintEvent | undefined;
    /**
     * Instantiates a new printTaskTrigger and sets the default values.
     * @param printTaskTriggerParameterValue 
     */
    public constructor(printTaskTriggerParameterValue?: PrintTaskTrigger | undefined) {
        super();
        this.definition = printTaskTriggerParameterValue?.definition ;
        this.event = printTaskTriggerParameterValue?.event ;
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
        writer.writeObjectValue<PrintTaskDefinitionImpl>("definition", new PrintTaskDefinitionImpl(this.definition));
        }
        if(this.event){
        writer.writeEnumValue<PrintEvent>("event", this.event);
        }
    };
}
