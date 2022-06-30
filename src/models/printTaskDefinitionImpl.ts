import {AppIdentity} from './appIdentity';
import {createAppIdentityFromDiscriminatorValue} from './createAppIdentityFromDiscriminatorValue';
import {createPrintTaskFromDiscriminatorValue} from './createPrintTaskFromDiscriminatorValue';
import {AppIdentityImpl, EntityImpl, PrintTaskImpl} from './index';
import {PrintTask} from './printTask';
import {PrintTaskDefinition} from './printTaskDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrintTaskDefinitionImpl extends EntityImpl implements PrintTaskDefinition {
    /** The createdBy property */
    private _createdBy?: AppIdentity | undefined;
    /** The name of the printTaskDefinition. */
    private _displayName?: string | undefined;
    /** A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only. */
    private _tasks?: PrintTask[] | undefined;
    /**
     * Instantiates a new printTaskDefinition and sets the default values.
     * @param printTaskDefinitionParameterValue 
     */
    public constructor(printTaskDefinitionParameterValue?: PrintTaskDefinition | undefined) {
        super(printTaskDefinitionParameterValue);
        this._createdBy = printTaskDefinitionParameterValue?.createdBy;
        this._displayName = printTaskDefinitionParameterValue?.displayName;
        this._tasks = printTaskDefinitionParameterValue?.tasks;
    };
    /**
     * Gets the createdBy property value. The createdBy property
     * @returns a AppIdentityInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The createdBy property
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: AppIdentity | undefined) {
        if(value) {
            this._createdBy = value instanceof AppIdentityImpl? value : new AppIdentityImpl(value);
        }
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
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdBy": n => { this.createdBy = n.getObjectValue<AppIdentityImpl>(createAppIdentityFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "tasks": n => { this.tasks = n.getCollectionOfObjectValues<PrintTaskImpl>(createPrintTaskFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdBy){
            writer.writeObjectValue<AppIdentityImpl>("createdBy", (!this.createdBy || this.createdBy instanceof AppIdentityImpl? this.createdBy : new AppIdentityImpl(this.createdBy)));
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.tasks && this.tasks.length != 0){        const tasksArrValue: PrintTaskImpl[] = [];
        this.tasks?.forEach(element => {
            tasksArrValue.push((element instanceof PrintTaskImpl? element:new PrintTaskImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintTaskImpl>("tasks", tasksArrValue);
        }
    };
    /**
     * Gets the tasks property value. A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only.
     * @returns a PrintTaskInterface
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PrintTask[] | undefined) {
        if(value) {
            const tasksArrValue: PrintTaskImpl[] = [];
            this.tasks?.forEach(element => {
                tasksArrValue.push((element instanceof PrintTaskImpl? element:new PrintTaskImpl(element)));
            });
            this._tasks = tasksArrValue;
        }
    };
}
