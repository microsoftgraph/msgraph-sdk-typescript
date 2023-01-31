import {AttackSimulationSimulationUserCoverage, BaseCollectionPaginationCountResponse} from '../../../models/';
import {createAttackSimulationSimulationUserCoverageFromDiscriminatorValue} from '../../../models/createAttackSimulationSimulationUserCoverageFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GetAttackSimulationSimulationUserCoverageResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: AttackSimulationSimulationUserCoverage[] | undefined;
    /**
     * Instantiates a new getAttackSimulationSimulationUserCoverageResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<AttackSimulationSimulationUserCoverage>(createAttackSimulationSimulationUserCoverageFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AttackSimulationSimulationUserCoverage>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a attackSimulationSimulationUserCoverage
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: AttackSimulationSimulationUserCoverage[] | undefined) {
        this._value = value;
    };
}
