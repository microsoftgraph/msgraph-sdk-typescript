import {IncompleteData} from './incompleteData';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IncompleteDataImpl implements AdditionalDataHolder, IncompleteData, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The service does not have source data before the specified time. */
    public missingDataBeforeDateTime?: Date | undefined;
    /** Some data was not recorded due to excessive activity. */
    public wasThrottled?: boolean | undefined;
    /**
     * Instantiates a new incompleteData and sets the default values.
     * @param incompleteDataParameterValue 
     */
    public constructor(incompleteDataParameterValue?: IncompleteData | undefined) {
        this.additionalData = incompleteDataParameterValue?.additionalData ? incompleteDataParameterValue?.additionalData! : {}
        this.missingDataBeforeDateTime = incompleteDataParameterValue?.missingDataBeforeDateTime ;
        this.wasThrottled = incompleteDataParameterValue?.wasThrottled ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "missingDataBeforeDateTime": n => { this.missingDataBeforeDateTime = n.getDateValue(); },
            "wasThrottled": n => { this.wasThrottled = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.missingDataBeforeDateTime){
        writer.writeDateValue("missingDataBeforeDateTime", this.missingDataBeforeDateTime);
        }
        if(this.wasThrottled){
        writer.writeBooleanValue("wasThrottled", this.wasThrottled);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
