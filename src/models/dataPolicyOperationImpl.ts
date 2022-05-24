import {DataPolicyOperation} from './dataPolicyOperation';
import {DataPolicyOperationStatus} from './dataPolicyOperationStatus';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of dataPolicyOperation entities. */
export class DataPolicyOperationImpl extends EntityImpl implements DataPolicyOperation, Parsable {
    /** Represents when the request for this data policy operation was completed, in UTC time, using the ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Null until the operation completes. */
    public completedDateTime?: Date | undefined;
    /** Specifies the progress of an operation. */
    public progress?: number | undefined;
    /** Possible values are: notStarted, running, complete, failed, unknownFutureValue. */
    public status?: DataPolicyOperationStatus | undefined;
    /** The URL location to where data is being exported for export requests. */
    public storageLocation?: string | undefined;
    /** Represents when the request for this data operation was submitted, in UTC time, using the ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public submittedDateTime?: Date | undefined;
    /** The id for the user on whom the operation is performed. */
    public userId?: string | undefined;
    /**
     * Instantiates a new dataPolicyOperation and sets the default values.
     * @param dataPolicyOperationParameterValue 
     */
    public constructor(dataPolicyOperationParameterValue?: DataPolicyOperation | undefined) {
        super();
        this.completedDateTime = dataPolicyOperationParameterValue?.completedDateTime ;
        this.progress = dataPolicyOperationParameterValue?.progress ;
        this.status = dataPolicyOperationParameterValue?.status ;
        this.storageLocation = dataPolicyOperationParameterValue?.storageLocation ;
        this.submittedDateTime = dataPolicyOperationParameterValue?.submittedDateTime ;
        this.userId = dataPolicyOperationParameterValue?.userId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "completedDateTime": n => { this.completedDateTime = n.getDateValue(); },
            "progress": n => { this.progress = n.getNumberValue(); },
            "status": n => { this.status = n.getEnumValue<DataPolicyOperationStatus>(DataPolicyOperationStatus); },
            "storageLocation": n => { this.storageLocation = n.getStringValue(); },
            "submittedDateTime": n => { this.submittedDateTime = n.getDateValue(); },
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
        if(this.completedDateTime){
        writer.writeDateValue("completedDateTime", this.completedDateTime);
        }
        if(this.progress){
        writer.writeNumberValue("progress", this.progress);
        }
        if(this.status){
        writer.writeEnumValue<DataPolicyOperationStatus>("status", this.status);
        }
        if(this.storageLocation){
        writer.writeStringValue("storageLocation", this.storageLocation);
        }
        if(this.submittedDateTime){
        writer.writeDateValue("submittedDateTime", this.submittedDateTime);
        }
        if(this.userId){
        writer.writeStringValue("userId", this.userId);
        }
    };
}
