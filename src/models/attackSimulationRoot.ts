import {createSimulationAutomationFromDiscriminatorValue} from './createSimulationAutomationFromDiscriminatorValue';
import {createSimulationFromDiscriminatorValue} from './createSimulationFromDiscriminatorValue';
import {Entity, Simulation, SimulationAutomation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttackSimulationRoot extends Entity implements Parsable {
    /** Represents simulation automation created to run on a tenant. */
    private _simulationAutomations?: SimulationAutomation[] | undefined;
    /** Represents an attack simulation training campaign in a tenant. */
    private _simulations?: Simulation[] | undefined;
    /**
     * Instantiates a new attackSimulationRoot and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "simulationAutomations": n => { this.simulationAutomations = n.getCollectionOfObjectValues<SimulationAutomation>(createSimulationAutomationFromDiscriminatorValue); },
            "simulations": n => { this.simulations = n.getCollectionOfObjectValues<Simulation>(createSimulationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<SimulationAutomation>("simulationAutomations", this.simulationAutomations);
        writer.writeCollectionOfObjectValues<Simulation>("simulations", this.simulations);
    };
    /**
     * Gets the simulationAutomations property value. Represents simulation automation created to run on a tenant.
     * @returns a simulationAutomation
     */
    public get simulationAutomations() {
        return this._simulationAutomations;
    };
    /**
     * Sets the simulationAutomations property value. Represents simulation automation created to run on a tenant.
     * @param value Value to set for the simulationAutomations property.
     */
    public set simulationAutomations(value: SimulationAutomation[] | undefined) {
        this._simulationAutomations = value;
    };
    /**
     * Gets the simulations property value. Represents an attack simulation training campaign in a tenant.
     * @returns a simulation
     */
    public get simulations() {
        return this._simulations;
    };
    /**
     * Sets the simulations property value. Represents an attack simulation training campaign in a tenant.
     * @param value Value to set for the simulations property.
     */
    public set simulations(value: Simulation[] | undefined) {
        this._simulations = value;
    };
}
