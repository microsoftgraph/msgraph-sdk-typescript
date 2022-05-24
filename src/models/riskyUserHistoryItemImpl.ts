import {createRiskUserActivityFromDiscriminatorValue} from './createRiskUserActivityFromDiscriminatorValue';
import {RiskUserActivityImpl, RiskyUserImpl} from './index';
import {RiskUserActivity} from './riskUserActivity';
import {RiskyUserHistoryItem} from './riskyUserHistoryItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityProtectionRoot singleton. */
export class RiskyUserHistoryItemImpl extends RiskyUserImpl implements Parsable, RiskyUserHistoryItem {
    /** The activity related to user risk level change. */
    public activity?: RiskUserActivity | undefined;
    /** The id of actor that does the operation. */
    public initiatedBy?: string | undefined;
    /** The id of the user. */
    public userId?: string | undefined;
    /**
     * Instantiates a new riskyUserHistoryItem and sets the default values.
     * @param riskyUserHistoryItemParameterValue 
     */
    public constructor(riskyUserHistoryItemParameterValue?: RiskyUserHistoryItem | undefined) {
        super();
        this.activity = riskyUserHistoryItemParameterValue?.activity ;
        this.initiatedBy = riskyUserHistoryItemParameterValue?.initiatedBy ;
        this.userId = riskyUserHistoryItemParameterValue?.userId ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activity){
        writer.writeObjectValue<RiskUserActivityImpl>("activity", new RiskUserActivityImpl(this.activity));
        }
        if(this.initiatedBy){
        writer.writeStringValue("initiatedBy", this.initiatedBy);
        }
        if(this.userId){
        writer.writeStringValue("userId", this.userId);
        }
    };
}
