import {createSimulationAutomationFromDiscriminatorValue} from './createSimulationAutomationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, SimulationAutomation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SimulationAutomationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: SimulationAutomation[] | undefined;
    /**
     * Instantiates a new SimulationAutomationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<SimulationAutomation>(createSimulationAutomationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<SimulationAutomation>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a simulationAutomation
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: SimulationAutomation[] | undefined) {
        this._value = value;
    };
}
