import {EntityImpl} from './index';
import {Operation} from './operation';
import {OperationStatus} from './operationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OperationImpl extends EntityImpl implements Operation, Parsable {
    /** The start time of the operation. */
    createdDateTime?: Date | undefined;
    /** The time of the last action of the operation. */
    lastActionDateTime?: Date | undefined;
    /** Possible values are: notStarted, running, completed, failed. Read-only. */
    status?: OperationStatus | undefined;
    /**
     * Instantiates a new operation and sets the default values.
     * @param operationParameterValue 
     */
    public constructor(operationParameterValue?: Operation | undefined) {
        super();
        this.createdDateTime = operationParameterValue?.createdDateTime ;
        this.lastActionDateTime = operationParameterValue?.lastActionDateTime ;
        this.status = operationParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "lastActionDateTime": n => { this.lastActionDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<OperationStatus>(OperationStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTime){
        if(this.createdDateTime)
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.lastActionDateTime){
        if(this.lastActionDateTime)
        writer.writeDateValue("lastActionDateTime", this.lastActionDateTime);
        }
        if(this.status){
        if(this.status)
        writer.writeEnumValue<OperationStatus>("status", this.status);
        }
    };
}
