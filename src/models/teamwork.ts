import {createDeletedTeamFromDiscriminatorValue} from './createDeletedTeamFromDiscriminatorValue';
import {createWorkforceIntegrationFromDiscriminatorValue} from './createWorkforceIntegrationFromDiscriminatorValue';
import {DeletedTeam, Entity, WorkforceIntegration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Teamwork extends Entity implements Parsable {
    /** The deletedTeams property */
    private _deletedTeams?: DeletedTeam[] | undefined;
    /** The workforceIntegrations property */
    private _workforceIntegrations?: WorkforceIntegration[] | undefined;
    /**
     * Instantiates a new Teamwork and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deletedTeams property value. The deletedTeams property
     * @returns a deletedTeam
     */
    public get deletedTeams() {
        return this._deletedTeams;
    };
    /**
     * Sets the deletedTeams property value. The deletedTeams property
     * @param value Value to set for the deletedTeams property.
     */
    public set deletedTeams(value: DeletedTeam[] | undefined) {
        this._deletedTeams = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deletedTeams": n => { this.deletedTeams = n.getCollectionOfObjectValues<DeletedTeam>(createDeletedTeamFromDiscriminatorValue); },
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
        writer.writeCollectionOfObjectValues<DeletedTeam>("deletedTeams", this.deletedTeams);
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
