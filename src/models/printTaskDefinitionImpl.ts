import {AppIdentity} from './appIdentity';
import {createAppIdentityFromDiscriminatorValue} from './createAppIdentityFromDiscriminatorValue';
import {createPrintTaskFromDiscriminatorValue} from './createPrintTaskFromDiscriminatorValue';
import {AppIdentityImpl, EntityImpl, PrintTaskImpl} from './index';
import {PrintTask} from './printTask';
import {PrintTaskDefinition} from './printTaskDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrintTaskDefinitionImpl extends EntityImpl implements Parsable, PrintTaskDefinition {
    /** The createdBy property */
    public createdBy?: AppIdentity | undefined;
    /** The name of the printTaskDefinition. */
    public displayName?: string | undefined;
    /** A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only. */
    public tasks?: PrintTask[] | undefined;
    /**
     * Instantiates a new printTaskDefinition and sets the default values.
     * @param printTaskDefinitionParameterValue 
     */
    public constructor(printTaskDefinitionParameterValue?: PrintTaskDefinition | undefined) {
        super();
        this.createdBy = printTaskDefinitionParameterValue?.createdBy ;
        this.displayName = printTaskDefinitionParameterValue?.displayName ;
        this.tasks = printTaskDefinitionParameterValue?.tasks ;
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
        writer.writeObjectValue<AppIdentityImpl>("createdBy", new AppIdentityImpl(this.createdBy));
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.tasks && this.tasks.length != 0){        const tasksArrValue: PrintTaskImpl[] = []; this.tasks?.forEach(element => {tasksArrValue.push(new PrintTaskImpl(element));});
        writer.writeCollectionOfObjectValues<PrintTaskImpl>("tasks", tasksArrValue);
        }
    };
}
