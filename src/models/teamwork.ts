import {createWorkforceIntegrationFromDiscriminatorValue} from './createWorkforceIntegrationFromDiscriminatorValue';
import {Entity, WorkforceIntegration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Teamwork extends Entity implements Parsable {
    /** The workforceIntegrations property */
    private _workforceIntegrations?: WorkforceIntegration[] | undefined;
    /**
     * Instantiates a new Teamwork and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.teamwork";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "workforceIntegrations": n => { this.workforceIntegrations = n.getCollectionOfObjectValues<WorkforceIntegration>(createWorkforceIntegrationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<WorkforceIntegration>("workforceIntegrations", this.workforceIntegrations);
    };
    /**
     * Gets the workforceIntegrations property value. The workforceIntegrations property
     * @returns a workforceIntegration
     */
    public get workforceIntegrations() {
        return this._workforceIntegrations;
    };
    /**
     * Sets the workforceIntegrations property value. The workforceIntegrations property
     * @param value Value to set for the workforceIntegrations property.
     */
    public set workforceIntegrations(value: WorkforceIntegration[] | undefined) {
        this._workforceIntegrations = value;
    };
}
