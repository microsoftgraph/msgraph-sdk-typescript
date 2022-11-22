import {createPrintTaskDefinitionFromDiscriminatorValue} from './createPrintTaskDefinitionFromDiscriminatorValue';
import {createPrintTaskStatusFromDiscriminatorValue} from './createPrintTaskStatusFromDiscriminatorValue';
import {createPrintTaskTriggerFromDiscriminatorValue} from './createPrintTaskTriggerFromDiscriminatorValue';
import {Entity, PrintTaskDefinition, PrintTaskStatus, PrintTaskTrigger} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class PrintTask extends Entity implements Parsable {
    /** The definition property */
    private _definition?: PrintTaskDefinition | undefined;
    /** The URL for the print entity that triggered this task. For example, https://graph.microsoft.com/v1.0/print/printers/{printerId}/jobs/{jobId}. Read-only. */
    private _parentUrl?: string | undefined;
    /** The status property */
    private _status?: PrintTaskStatus | undefined;
    /** The trigger property */
    private _trigger?: PrintTaskTrigger | undefined;
    /**
     * Instantiates a new printTask and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the definition property value. The definition property
     * @returns a printTaskDefinition
     */
    public get definition() {
        return this._definition;
    };
    /**
     * Sets the definition property value. The definition property
     * @param value Value to set for the definition property.
     */
    public set definition(value: PrintTaskDefinition | undefined) {
        this._definition = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "definition": n => { this.definition = n.getObjectValue<PrintTaskDefinition>(createPrintTaskDefinitionFromDiscriminatorValue); },
            "parentUrl": n => { this.parentUrl = n.getStringValue(); },
            "status": n => { this.status = n.getObjectValue<PrintTaskStatus>(createPrintTaskStatusFromDiscriminatorValue); },
            "trigger": n => { this.trigger = n.getObjectValue<PrintTaskTrigger>(createPrintTaskTriggerFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the parentUrl property value. The URL for the print entity that triggered this task. For example, https://graph.microsoft.com/v1.0/print/printers/{printerId}/jobs/{jobId}. Read-only.
     * @returns a string
     */
    public get parentUrl() {
        return this._parentUrl;
    };
    /**
     * Sets the parentUrl property value. The URL for the print entity that triggered this task. For example, https://graph.microsoft.com/v1.0/print/printers/{printerId}/jobs/{jobId}. Read-only.
     * @param value Value to set for the parentUrl property.
     */
    public set parentUrl(value: string | undefined) {
        this._parentUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PrintTaskDefinition>("definition", this.definition);
        writer.writeStringValue("parentUrl", this.parentUrl);
        writer.writeObjectValue<PrintTaskStatus>("status", this.status);
        writer.writeObjectValue<PrintTaskTrigger>("trigger", this.trigger);
    };
    /**
     * Gets the status property value. The status property
     * @returns a printTaskStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: PrintTaskStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the trigger property value. The trigger property
     * @returns a printTaskTrigger
     */
    public get trigger() {
        return this._trigger;
    };
    /**
     * Sets the trigger property value. The trigger property
     * @param value Value to set for the trigger property.
     */
    public set trigger(value: PrintTaskTrigger | undefined) {
        this._trigger = value;
    };
}
