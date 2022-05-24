import {ItemActionStat} from './itemActionStat';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemActionStatImpl implements AdditionalDataHolder, ItemActionStat, Parsable {
    /** The number of times the action took place. Read-only. */
    public actionCount?: number | undefined;
    /** The number of distinct actors that performed the action. Read-only. */
    public actorCount?: number | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new itemActionStat and sets the default values.
     * @param itemActionStatParameterValue 
     */
    public constructor(itemActionStatParameterValue?: ItemActionStat | undefined) {
        this.actionCount = itemActionStatParameterValue?.actionCount ;
        this.actorCount = itemActionStatParameterValue?.actorCount ;
        this.additionalData = itemActionStatParameterValue?.additionalData ? itemActionStatParameterValue?.additionalData! : {}
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "actionCount": n => { this.actionCount = n.getNumberValue(); },
            "actorCount": n => { this.actorCount = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.actionCount){
        writer.writeNumberValue("actionCount", this.actionCount);
        }
        if(this.actorCount){
        writer.writeNumberValue("actorCount", this.actorCount);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
