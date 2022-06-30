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
export class PrintTaskImpl extends EntityImpl implements PrintTask {
    /** The definition property */
    private _definition?: PrintTaskDefinition | undefined;
    /** The URL for the print entity that triggered this task. For example, https://graph.microsoft.com/beta/print/printers/{printerId}/jobs/{jobId}. Read-only. */
    private _parentUrl?: string | undefined;
    /** The status property */
    private _status?: PrintTaskStatus | undefined;
    /** The trigger property */
    private _trigger?: PrintTaskTrigger | undefined;
    /**
     * Instantiates a new printTask and sets the default values.
     * @param printTaskParameterValue 
     */
    public constructor(printTaskParameterValue?: PrintTask | undefined) {
        super(printTaskParameterValue);
        this._definition = printTaskParameterValue?.definition;
        this._parentUrl = printTaskParameterValue?.parentUrl;
        this._status = printTaskParameterValue?.status;
        this._trigger = printTaskParameterValue?.trigger;
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
     * Gets the parentUrl property value. The URL for the print entity that triggered this task. For example, https://graph.microsoft.com/beta/print/printers/{printerId}/jobs/{jobId}. Read-only.
     * @returns a string
     */
    public get parentUrl() {
        return this._parentUrl;
    };
    /**
     * Sets the parentUrl property value. The URL for the print entity that triggered this task. For example, https://graph.microsoft.com/beta/print/printers/{printerId}/jobs/{jobId}. Read-only.
     * @param value Value to set for the parentUrl property.
     */
    public set parentUrl(value: string | undefined) {
        if(value) {
            this._parentUrl = value;
        }
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
        if(this.parentUrl){
            writer.writeStringValue("parentUrl", this.parentUrl);
        }
        if(this.status){
            writer.writeObjectValue<PrintTaskStatusImpl>("status", (!this.status || this.status instanceof PrintTaskStatusImpl? this.status : new PrintTaskStatusImpl(this.status)));
        }
        if(this.trigger){
            writer.writeObjectValue<PrintTaskTriggerImpl>("trigger", (!this.trigger || this.trigger instanceof PrintTaskTriggerImpl? this.trigger : new PrintTaskTriggerImpl(this.trigger)));
        }
    };
    /**
     * Gets the status property value. The status property
     * @returns a PrintTaskStatusInterface
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: PrintTaskStatus | undefined) {
        if(value) {
            this._status = value instanceof PrintTaskStatusImpl? value : new PrintTaskStatusImpl(value);
        }
    };
    /**
     * Gets the trigger property value. The trigger property
     * @returns a PrintTaskTriggerInterface
     */
    public get trigger() {
        return this._trigger;
    };
    /**
     * Sets the trigger property value. The trigger property
     * @param value Value to set for the trigger property.
     */
    public set trigger(value: PrintTaskTrigger | undefined) {
        if(value) {
            this._trigger = value instanceof PrintTaskTriggerImpl? value : new PrintTaskTriggerImpl(value);
        }
    };
}
