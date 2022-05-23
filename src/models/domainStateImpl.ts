import {DomainState} from './domainState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainStateImpl implements AdditionalDataHolder, DomainState, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Timestamp for when the last activity occurred. The value is updated when an operation is scheduled, the asynchronous task starts, and when the operation completes. */
    public lastActionDateTime?: Date | undefined;
    /** Type of asynchronous operation. The values can be ForceDelete or Verification */
    public operation?: string | undefined;
    /** Current status of the operation.  Scheduled - Operation has been scheduled but has not started.  InProgress - Task has started and is in progress.  Failed - Operation has failed. */
    public status?: string | undefined;
    /**
     * Instantiates a new domainState and sets the default values.
     * @param domainStateParameterValue 
     */
    public constructor(domainStateParameterValue?: DomainState | undefined) {
        this.additionalData = domainStateParameterValue?.additionalData ? domainStateParameterValue?.additionalData! : {}
        this.lastActionDateTime = domainStateParameterValue?.lastActionDateTime ;
        this.operation = domainStateParameterValue?.operation ;
        this.status = domainStateParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "lastActionDateTime": n => { this.lastActionDateTime = n.getDateValue(); },
            "operation": n => { this.operation = n.getStringValue(); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.lastActionDateTime){
        writer.writeDateValue("lastActionDateTime", this.lastActionDateTime);
        }
        if(this.operation){
        writer.writeStringValue("operation", this.operation);
        }
        if(this.status){
        writer.writeStringValue("status", this.status);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
