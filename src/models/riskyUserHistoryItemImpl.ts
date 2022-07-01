import {createRiskUserActivityFromDiscriminatorValue} from './createRiskUserActivityFromDiscriminatorValue';
import {RiskUserActivityImpl, RiskyUserImpl} from './index';
import {RiskUserActivity} from './riskUserActivity';
import {RiskyUserHistoryItem} from './riskyUserHistoryItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RiskyUserHistoryItemImpl extends RiskyUserImpl implements RiskyUserHistoryItem {
    /** The activity related to user risk level change. */
    private _activity?: RiskUserActivity | undefined;
    /** The id of actor that does the operation. */
    private _initiatedBy?: string | undefined;
    /** The id of the user. */
    private _userId?: string | undefined;
    /**
     * Gets the activity property value. The activity related to user risk level change.
     * @returns a RiskUserActivityInterface
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Sets the activity property value. The activity related to user risk level change.
     * @param value Value to set for the activity property.
     */
    public set activity(value: RiskUserActivity | undefined) {
        if(value) {
            this._activity = value instanceof RiskUserActivityImpl? value as RiskUserActivityImpl: new RiskUserActivityImpl(value);
        }
    };
    /**
     * Instantiates a new RiskyUserHistoryItem and sets the default values.
     * @param riskyUserHistoryItemParameterValue 
     */
    public constructor(riskyUserHistoryItemParameterValue?: RiskyUserHistoryItem | undefined) {
        super(riskyUserHistoryItemParameterValue);
        this._activity = riskyUserHistoryItemParameterValue?.activity;
        this._initiatedBy = riskyUserHistoryItemParameterValue?.initiatedBy;
        this._userId = riskyUserHistoryItemParameterValue?.userId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activity": n => { this.activity = n.getObjectValue<RiskUserActivityImpl>(createRiskUserActivityFromDiscriminatorValue); },
            "initiatedBy": n => { this.initiatedBy = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Gets the initiatedBy property value. The id of actor that does the operation.
     * @returns a string
     */
    public get initiatedBy() {
        return this._initiatedBy;
    };
    /**
     * Sets the initiatedBy property value. The id of actor that does the operation.
     * @param value Value to set for the initiatedBy property.
     */
    public set initiatedBy(value: string | undefined) {
        if(value) {
            this._initiatedBy = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activity){
            writer.writeObjectValue<RiskUserActivityImpl>("activity", (this.activity instanceof RiskUserActivityImpl? this.activity as RiskUserActivityImpl: new RiskUserActivityImpl(this.activity)));
        }
        if(this.initiatedBy){
            writer.writeStringValue("initiatedBy", this.initiatedBy);
        }
        if(this.userId){
            writer.writeStringValue("userId", this.userId);
        }
    };
    /**
     * Gets the userId property value. The id of the user.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The id of the user.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        if(value) {
            this._userId = value;
        }
    };
}
