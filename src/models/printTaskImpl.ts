import {createPrintTaskDefinitionFromDiscriminatorValue} from './createPrintTaskDefinitionFromDiscriminatorValue';
import {createPrintTaskStatusFromDiscriminatorValue} from './createPrintTaskStatusFromDiscriminatorValue';
import {createPrintTaskTriggerFromDiscriminatorValue} from './createPrintTaskTriggerFromDiscriminatorValue';
import {EntityImpl, PrintTaskDefinitionImpl, PrintTaskStatusImpl, PrintTaskTriggerImpl} from './index';
import {PrintTask} from './printTask';
import {PrintTaskDefinition} from './printTaskDefinition';
import {PrintTaskStatus} from './printTaskStatus';
import {PrintTaskTrigger} from './printTaskTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrintTaskImpl extends EntityImpl implements Parsable, PrintTask {
    /** The definition property */
    public definition?: PrintTaskDefinition | undefined;
    /** The URL for the print entity that triggered this task. For example, https://graph.microsoft.com/beta/print/printers/{printerId}/jobs/{jobId}. Read-only. */
    public parentUrl?: string | undefined;
    /** The status property */
    public status?: PrintTaskStatus | undefined;
    /** The trigger property */
    public trigger?: PrintTaskTrigger | undefined;
    /**
     * Instantiates a new printTask and sets the default values.
     * @param printTaskParameterValue 
     */
    public constructor(printTaskParameterValue?: PrintTask | undefined) {
        super();
        this.definition = printTaskParameterValue?.definition ;
        this.parentUrl = printTaskParameterValue?.parentUrl ;
        this.status = printTaskParameterValue?.status ;
        this.trigger = printTaskParameterValue?.trigger ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "definition": n => { this.definition = n.getObjectValue<PrintTaskDefinitionImpl>(createPrintTaskDefinitionFromDiscriminatorValue); },
            "parentUrl": n => { this.parentUrl = n.getStringValue(); },
            "status": n => { this.status = n.getObjectValue<PrintTaskStatusImpl>(createPrintTaskStatusFromDiscriminatorValue); },
            "trigger": n => { this.trigger = n.getObjectValue<PrintTaskTriggerImpl>(createPrintTaskTriggerFromDiscriminatorValue); },
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
        if(this.parentUrl){
        writer.writeStringValue("parentUrl", this.parentUrl);
        }
        if(this.status){
        writer.writeObjectValue<PrintTaskStatusImpl>("status", new PrintTaskStatusImpl(this.status));
        }
        if(this.trigger){
        writer.writeObjectValue<PrintTaskTriggerImpl>("trigger", new PrintTaskTriggerImpl(this.trigger));
        }
    };
}
