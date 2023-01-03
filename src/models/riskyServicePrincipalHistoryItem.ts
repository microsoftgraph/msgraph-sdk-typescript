import {createRiskServicePrincipalActivityFromDiscriminatorValue} from './createRiskServicePrincipalActivityFromDiscriminatorValue';
import {RiskServicePrincipalActivity, RiskyServicePrincipal} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of agreementAcceptance entities.
 */
export class RiskyServicePrincipalHistoryItem extends RiskyServicePrincipal implements Parsable {
    /** The activity related to service principal risk level change. */
    private _activity?: RiskServicePrincipalActivity | undefined;
    /** The identifier of the actor of the operation. */
    private _initiatedBy?: string | undefined;
    /**
     * Gets the activity property value. The activity related to service principal risk level change.
     * @returns a riskServicePrincipalActivity
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Sets the activity property value. The activity related to service principal risk level change.
     * @param value Value to set for the activity property.
     */
    public set activity(value: RiskServicePrincipalActivity | undefined) {
        this._activity = value;
    };
    /**
     * Instantiates a new riskyServicePrincipalHistoryItem and sets the default values.
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
            "activity": n => { this.activity = n.getObjectValue<RiskServicePrincipalActivity>(createRiskServicePrincipalActivityFromDiscriminatorValue); },
            "initiatedBy": n => { this.initiatedBy = n.getStringValue(); },
        };
    };
    /**
     * Gets the initiatedBy property value. The identifier of the actor of the operation.
     * @returns a string
     */
    public get initiatedBy() {
        return this._initiatedBy;
    };
    /**
     * Sets the initiatedBy property value. The identifier of the actor of the operation.
     * @param value Value to set for the initiatedBy property.
     */
    public set initiatedBy(value: string | undefined) {
        this._initiatedBy = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<RiskServicePrincipalActivity>("activity", this.activity);
        writer.writeStringValue("initiatedBy", this.initiatedBy);
    };
}
