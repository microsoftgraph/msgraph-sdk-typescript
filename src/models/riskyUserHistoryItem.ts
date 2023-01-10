import {createRiskUserActivityFromDiscriminatorValue} from './createRiskUserActivityFromDiscriminatorValue';
import {RiskUserActivity, RiskyUser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RiskyUserHistoryItem extends RiskyUser implements Parsable {
    /** The activity related to user risk level change. */
    private _activity?: RiskUserActivity | undefined;
    /** The ID of actor that does the operation. */
    private _initiatedBy?: string | undefined;
    /** The ID of the user. */
    private _userId?: string | undefined;
    /**
     * Gets the activity property value. The activity related to user risk level change.
     * @returns a riskUserActivity
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Sets the activity property value. The activity related to user risk level change.
     * @param value Value to set for the activity property.
     */
    public set activity(value: RiskUserActivity | undefined) {
        this._activity = value;
    };
    /**
     * Instantiates a new riskyUserHistoryItem and sets the default values.
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
            "activity": n => { this.activity = n.getObjectValue<RiskUserActivity>(createRiskUserActivityFromDiscriminatorValue); },
            "initiatedBy": n => { this.initiatedBy = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Gets the initiatedBy property value. The ID of actor that does the operation.
     * @returns a string
     */
    public get initiatedBy() {
        return this._initiatedBy;
    };
    /**
     * Sets the initiatedBy property value. The ID of actor that does the operation.
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
        writer.writeObjectValue<RiskUserActivity>("activity", this.activity);
        writer.writeStringValue("initiatedBy", this.initiatedBy);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Gets the userId property value. The ID of the user.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The ID of the user.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
