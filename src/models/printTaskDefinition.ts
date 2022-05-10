import {createAppIdentityFromDiscriminatorValue} from './createAppIdentityFromDiscriminatorValue';
import {createPrintTaskFromDiscriminatorValue} from './createPrintTaskFromDiscriminatorValue';
import {AppIdentity, Entity, PrintTask} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintTaskDefinition extends Entity implements Parsable {
    /** The createdBy property */
    private _createdBy?: AppIdentity | undefined;
    /** The name of the printTaskDefinition. */
    private _displayName?: string | undefined;
    /** A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only. */
    private _tasks?: PrintTask[] | undefined;
    /**
     * Instantiates a new printTaskDefinition and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdBy property value. The createdBy property
     * @returns a appIdentity
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The createdBy property
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: AppIdentity | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the displayName property value. The name of the printTaskDefinition.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the printTaskDefinition.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdBy": n => { this.createdBy = n.getObjectValue<AppIdentity>(createAppIdentityFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "tasks": n => { this.tasks = n.getCollectionOfObjectValues<PrintTask>(createPrintTaskFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<AppIdentity>("createdBy", this.createdBy);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<PrintTask>("tasks", this.tasks);
    };
    /**
     * Gets the tasks property value. A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only.
     * @returns a printTask
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PrintTask[] | undefined) {
        this._tasks = value;
    };
}
